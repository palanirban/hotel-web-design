import "../src/css/imgModal.css";

export default function ImgModal({ closeModal, imgSrc }) {
  return (
    <div className="img-modal-backdrop">
      <div className="img-modal-content">
        <button className="img-modal-close" onClick={closeModal}>
          &times;
        </button>
        <div className="modal-img-container">
          <div className="img-modal-image">
            <img src={imgSrc} alt="Modal Content" className="modal-img"/>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Est vel
            delectus iste possimus obcaecati eos,<br/> vero repellendus animi nihil
            ea blanditiis voluptatibus nam repudiandae excepturi exercitationem?
            Reiciendis pariatur quos aliquam?
          </p>
        </div>
      </div>
    </div>
  );
}
