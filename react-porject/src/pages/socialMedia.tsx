import "./pages.css";
import { useFormProviderContext } from "../context/formContext";

const SocialMedia = () => {
  const { formData, handleChange } = useFormProviderContext();

  return (
    <div className="info-page">
      <div className="info-box">
        <h2>Social media</h2>
        <div className="info-div">
          <h4>Twitter :</h4>
          <input
            onChange={handleChange}
            value={formData.twitter ?? ""}
            name="twitter"
            type="text"
            placeholder="twitter ..."
            className="name-inp"
          />
        </div>
        <div className="info-div">
          <h4>Discord :</h4>
          <input
            onChange={handleChange}
            value={formData.discord ?? ""}
            name="discord"
            type="email"
            placeholder="discorde  ..."
            className="name-inp"
          />
        </div>
        <div className="info-div">
          <h4>Linkdin :</h4>
          <input
            onChange={handleChange}
            value={formData.likdin ?? ""}
            name="likdin"
            type="text"
            placeholder="linkdin ..."
            className="name-inp"
          />
        </div>
        <div className="info-div">
          <h4>Instagram :</h4>
          <input
            onChange={handleChange}
            value={formData.instagram ?? ""}
            name="instagram"
            type="text"
            placeholder="instagram ..."
            className="name-inp"
          />
        </div>
        <div className="info-div">
          <h4>You Tube :</h4>
          <input
            onChange={handleChange}
            value={formData.youTube ?? ""}
            name="youTube"
            type="text"
            placeholder="you tube ..."
            className="name-inp"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;

// اسم بیشار از ده حزف نیاشه
// lst name بیشتر از ۲۰ حزف نباشد
// سن بیشتر از ۴۰ و کمتر از ۱۸ نباشد
// gmail validation چک شود
//  port = 3000
//  page one is so required
//  twitter and email is requred
// display item -> dynamic
// disable select text
// fix dropdown click
// arrow up & down icon
//
