import { useState } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { Slider } from '@/components/ui/slider.tsx';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Progress } from '@/components/ui/progress.tsx';
import { Heart, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UserPreferences, defaultPreferences, relationshipGoals, budgetOptions, commonInterests, dealBreakers } from '@/data/preferences.ts';
import { datingSites } from '@/data/datingSites.ts';
import { rankSites, MatchResult } from '@/utils/matching.ts';

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);
  const [results, setResults] = useState<MatchResult[] | null>(null);
  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate results
      const rankedSites = rankSites(datingSites, preferences);
      setResults(rankedSites.slice(0, 5)); // Top 5 recommendations
      setCurrentStep(totalSteps + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updatePreferences = (updates: Partial<UserPreferences>) => {
    setPreferences(prev => ({ ...prev, ...updates }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">What's your age range?</CardTitle>
              <CardDescription>
                This helps us recommend sites with users in your preferred age group
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium">
                  Age Range: {preferences.ageRange[0]} - {preferences.ageRange[1]} years old
                </Label>
                <div className="mt-4 px-4">
                  <Slider
                    value={preferences.ageRange}
                    onValueChange={(value) => updatePreferences({ ageRange: value as [number, number] })}
                    min={18}
                    max={65}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>18</span>
                    <span>65</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">What are you looking for?</CardTitle>
              <CardDescription>
                Different sites cater to different relationship goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={preferences.relationshipGoal} 
                onValueChange={(value) => updatePreferences({ relationshipGoal: value as any })}
                className="space-y-4"
              >
                {relationshipGoals.map((goal) => (
                  <div key={goal.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value={goal.id} id={goal.id} />
                    <div className="flex-1">
                      <Label htmlFor={goal.id} className="text-base font-medium cursor-pointer">
                        {goal.name}
                      </Label>
                      <p className="text-sm text-gray-600">{goal.description}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">What's your budget?</CardTitle>
              <CardDescription>
                Dating sites range from free to premium subscriptions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={preferences.budget} 
                onValueChange={(value) => updatePreferences({ budget: value as any })}
                className="space-y-4"
              >
                {budgetOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <div className="flex-1">
                      <Label htmlFor={option.id} className="text-base font-medium cursor-pointer">
                        {option.name}
                      </Label>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">What's important to you?</CardTitle>
              <CardDescription>
                Rate the importance of these factors (1 = Not Important, 5 = Very Important)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(preferences.importance).map(([key, value]) => (
                <div key={key}>
                  <div className="flex justify-between items-center mb-2">
                    <Label className="text-base font-medium capitalize">
                      {key === 'userBase' ? 'Large User Base' : key}
                    </Label>
                    <span className="text-sm font-medium">{value}/5</span>
                  </div>
                  <Slider
                    value={[value]}
                    onValueChange={(newValue) => 
                      updatePreferences({ 
                        importance: { ...preferences.importance, [key]: newValue[0] } 
                      })
                    }
                    min={1}
                    max={5}
                    step={1}
                    className="w-full"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        );

      case 5:
        return (
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Your interests</CardTitle>
              <CardDescription>
                Select interests that matter to you in a partner
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {commonInterests.map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest}
                      checked={preferences.interests.includes(interest)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updatePreferences({ 
                            interests: [...preferences.interests, interest] 
                          });
                        } else {
                          updatePreferences({ 
                            interests: preferences.interests.filter(i => i !== interest) 
                          });
                        }
                      }}
                    />
                    <Label htmlFor={interest} className="text-sm cursor-pointer">
                      {interest}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 6:
        return (
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Deal breakers</CardTitle>
              <CardDescription>
                Select any absolute deal breakers for you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dealBreakers.map((dealBreaker) => (
                  <div key={dealBreaker} className="flex items-center space-x-2">
                    <Checkbox
                      id={dealBreaker}
                      checked={preferences.dealBreakers.includes(dealBreaker)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updatePreferences({ 
                            dealBreakers: [...preferences.dealBreakers, dealBreaker] 
                          });
                        } else {
                          updatePreferences({ 
                            dealBreakers: preferences.dealBreakers.filter(d => d !== dealBreaker) 
                          });
                        }
                      }}
                    />
                    <Label htmlFor={dealBreaker} className="text-sm cursor-pointer">
                      {dealBreaker}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  if (results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                We Compare Cupid
              </span>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <h1 className="text-4xl font-bold">Your Perfect Matches!</h1>
            </div>
            <p className="text-xl text-gray-600">
              Based on your preferences, here are the top dating sites for you
            </p>
          </div>

          <div className="space-y-6">
            {results.map((site, index) => (
              <Card key={site.id} className={`${index === 0 ? 'ring-2 ring-pink-500 shadow-lg' : ''}`}>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{site.logo}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-2xl font-bold">{site.name}</h3>
                            {index === 0 && (
                              <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                                #1 MATCH
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-600 mb-4">{site.description}</p>
                          
                          <div className="mb-4">
                            <h4 className="font-semibold text-green-600 mb-2">Why it's perfect for you:</h4>
                            <ul className="space-y-1">
                              {site.reasons.map((reason, idx) => (
                                <li key={idx} className="text-sm text-gray-600">• {reason}</li>
                              ))}
                            </ul>
                          </div>

                          {site.warnings.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-orange-600 mb-2">Consider:</h4>
                              <ul className="space-y-1">
                                {site.warnings.map((warning, idx) => (
                                  <li key={idx} className="text-sm text-gray-600">• {warning}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-lg">
                        <div className="text-3xl font-bold">{site.matchScore}%</div>
                        <div className="text-sm opacity-90">Match Score</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-lg py-6">
                        Visit {site.name}
                      </Button>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => {
                setCurrentStep(1);
                setResults(null);
                setPreferences(defaultPreferences);
              }}
              variant="outline"
              className="mr-4"
            >
              Retake Quiz
            </Button>
            <Link to="/compare">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600">
                Compare All Sites
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              We Compare Cupid
            </span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
        </div>

        {/* Step Content */}
        {renderStep()}

        {/* Navigation */}
        <div className="max-w-2xl mx-auto mt-8 flex justify-between">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button 
            onClick={handleNext}
            className="bg-gradient-to-r from-pink-500 to-purple-600 flex items-center gap-2"
          >
            {currentStep === totalSteps ? 'Get Results' : 'Next'}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
