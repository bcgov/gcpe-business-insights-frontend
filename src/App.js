function App() {
  const translations = [
    {
      id: 1,
      key: "2021HLTH0075-002303",
      url: "https://bcgovnews.azureedge.net/translations/releases/2021HLTH0075-002303/12.1.21_COVID_Chinese(traditional).pdf",
    },
    {
      id: 2,
      key: "2021HLTH0075-002303",
      url: "https://bcgovnews.azureedge.net/translations/releases/2021HLTH0075-002303/12.1.21_COVID_French.pdf",
    },
    {
      id: 3,
      key: "2021HLTH0075-002303",
      url: "https://bcgovnews.azureedge.net/translations/releases/2021HLTH0075-002303/12.1.21_COVID_Punjabi.pdf",
    },
  ];

  return (
    <>
      <h1>GCPE Business Insights</h1>
      {translations.length === 0 ?
        <p>There are no translations.</p>
      :
      translations.map((translation) => {
        return <p key={translation.id}>{translation.key}:  {translation.url}</p>;
      })}
    </>
  );
}

export default App;
