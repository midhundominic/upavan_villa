export default function ThankYouPage() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-4">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          ✅ We will connect you shortly!
        </h1>
        <p className="text-lg text-gray-700">
          📞 <strong>Phone:</strong> 9961407700
        </p>
        <p className="text-lg text-gray-700">
          📧 <strong>Email:</strong>{" "}
          <a
            href="mailto:reservation@upavanresort.com"
            className="text-blue-600 underline"
          >
            reservation@upavanresort.com
          </a>
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
        >
          Go Back Home
        </a>
      </div>
    );
  }
  