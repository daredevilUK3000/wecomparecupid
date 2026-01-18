import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Kizzi Compare
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-pink-500 transition-colors">Home</Link>
            <Link to="/compare" className="text-gray-600 hover:text-pink-500 transition-colors">Compare Sites</Link>
            <Link to="/quiz" className="text-gray-600 hover:text-pink-500 transition-colors">Take Quiz</Link>
            <Link to="/reviews" className="text-gray-600 hover:text-pink-500 transition-colors">Reviews</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Last updated: January 2024
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                At Kizzi Compare ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website kizzicompare.com and use our dating site comparison services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">Information You Provide</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Contact information when you reach out to us (name, email address)</li>
                <li>Feedback and messages you send through our contact forms</li>
                <li>Quiz responses (processed locally in your browser, not stored on our servers)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Information Automatically Collected</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address (anonymized)</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide and maintain our comparison service</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Send you updates about our services (only if you opt-in)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Quiz Data and Recommendations</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-blue-800">
                  <strong>Important:</strong> Your quiz answers are processed locally in your browser and are not transmitted to or stored on our servers. We do not have access to your specific quiz responses or personal preferences.
                </p>
              </div>
              <p className="text-gray-700">
                The matching algorithm runs entirely in your browser using JavaScript, ensuring your privacy while providing personalized recommendations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
                <li><strong>Service providers:</strong> With trusted partners who help us operate our website (hosting, analytics)</li>
                <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business transfers:</strong> In connection with a merger, sale, or acquisition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Affiliate Links and Commissions</h2>
              <p className="text-gray-700">
                Our website contains affiliate links to dating sites. If you click on these links and sign up for a dating service, we may receive a commission at no additional cost to you. These affiliate relationships do not influence our recommendations, which are based solely on our comparison algorithm and research.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Remember your preferences</li>
                <li>Analyze website traffic and usage</li>
                <li>Improve our services</li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can control cookies through your browser settings. However, disabling cookies may affect some functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access the personal information we have about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Disable cookies through your browser</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us at <a href="mailto:info@kizzicompare.com" className="text-pink-600 hover:text-pink-700">info@kizzicompare.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
              <p className="text-gray-700">
                Our website contains links to third-party dating sites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:info@kizzicompare.com" className="text-pink-600 hover:text-pink-700">info@kizzicompare.com</a><br/>
                  <strong>Website:</strong> <a href="https://kizzicompare.com" className="text-pink-600 hover:text-pink-700">kizzicompare.com</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
