export default function Custom404() {
  return (
    <main id="Error">
      <h1>❌ ERROR</h1>
      <h2>
        ⚡ Diapo have crashed ! <br /> 🛡For design purpose we redirect you into
        this page.
      </h2>
      <iframe
        src="https://giphy.com/embed/MVgLEacpr9KVK172Ne"
        width="480"
        height="270"
        frameBorder="0"
        className="rounded-md"
        allowFullScreen
      ></iframe>

      <style jsx>{`
        * {
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }
        #Error {
          text-align: center !important;
          color: #fff !important;
          background-color: #222 !important;
          display: flex !important;
          height: 100vh !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: center !important;
          font-size: 2rem !important;
        }
        #Error h1 {
          font-family: monospace !important;
          color: red !important;
        }
        #Error h2 {
          font-size: 1.85rem !important;
          margin-bottom: 1rem !important;
        }
      `}</style>
    </main>
  );
}
