
const NotFound = () => {
  function goBack() {
    history.back();
  }
  setTimeout(goBack, 5000);

  return (
    <>
      <div className="nf-container">
        <div className="nf-photo"></div>
        <button onLoad={goBack} className="back-msg" title="Go back">
          <i class="fa-solid fa-circle-left"></i>
          Click here if you are not automatically redirected
        </button>
      </div>
    </>
  );
};

export default NotFound;
