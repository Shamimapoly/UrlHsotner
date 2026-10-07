import axios from 'axios';
import React, { useState } from 'react'

const UrlShotner = () => {
    const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/url/getLongUrl',{longUrl})
  .then((res)=>{
    setShortUrl(res.data.Shorturl);
    
  })
  .catch((err)=>{
    console.log(err);
    
  })
  
 }
  

  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-md">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          URL Shortener
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Make your long URL short
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2">

          <input
            type="url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter your URL"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Shorten
          </button>

        </form>

        {shortUrl && (
          <div className="mt-6">

            <p className="  text-sm text-gray-500 mb-2">
              Your Short URL
            </p>

            <div className="flex gap-2">

              <a
                href={shortUrl}
                target="_blank"
                        rel="noopener noreferrer"
                className="flex-1 border border-gray-300 rounded-lg bg-gray-50 px-4 py-3 text-blue-600 underline"
                >
                    {shortUrl}
                </a>

              <button
                onClick={() => navigator.clipboard.writeText(shortUrl)}
                className=" bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-gray-900"
              >
                Copy
              </button>

            </div>

          </div>
        )}

      </div>

    </div>
  )
}

export default UrlShotner
