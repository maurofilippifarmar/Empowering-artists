const ApiSection = () => {
  return (
    <div className="api-section" class="flex justify-between m-10">
      <div className="fetch-api" class="flex grow-[2]">
        <p>{/* here we will fetch the api from the radio */}</p>
        <ul id="news-list"></ul>
      </div>
      <div className="the-links" class="flex flex-col grow">
        <div>First link</div>
        <div>Second link</div>
        <div> Third link</div>
      </div>
    </div>
  );
};

export default ApiSection;
