// import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="pt-2 bg-blend-normal text-gradient-to-tr from-gray-800 to-black h-[66vh] overflow-y-scroll no-scrollbar">
      <p className="mb-4 text-gray-600">
        Welcome to CODAXLAB, our community for tech enthusiasts! Your privacy is important to
        us. This Privacy Policy outlines how we collect, use, and safeguard your
        information when you connect, share knowledge, and grow with us.
      </p>

      <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
      <p className="mb-4 text-gray-600">
        We may collect the following information when you interact with our
        platform:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>Personal information (e.g., name, email address) provided during registration.</li>
        <li>Technical data such as IP address, browser type, and usage patterns.</li>
        <li>Any content or feedback you share on our platform.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
      <p className="mb-4 text-gray-600">
        Your information helps us:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>Enhance your experience on our platform.</li>
        <li>Provide personalized recommendations and updates.</li>
        <li>Ensure the security and functionality of our services.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Sharing Your Information</h2>
      <p className="mb-4 text-gray-600">
        We value your trust and do not sell your personal information. We may share
        information with third parties only to:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>Comply with legal obligations.</li>
        <li>Protect the rights and safety of our community.</li>
        <li>Provide essential services through trusted partners.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Your Choices</h2>
      <p className="mb-4 text-gray-600">
        You have control over your data. You can update or delete your account
        information and adjust your preferences at any time.
      </p>

      <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
      <p className="mb-4 text-gray-600">
        If you have any questions about this Privacy Policy, please contact us at
        <span className="text-blue-500">enquiries@codaxlab.com</span>.
      </p>

      <p className="text-xs text-gray-600">
        By using our platform, you agree to this Privacy Policy. We may update this
        policy from time to time, and we encourage you to review it regularly.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
