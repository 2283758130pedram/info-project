import { useFormProviderContext } from "../context/formContext";
import "./pages.css";

const Phone = () => {
  const { formData, handleChange } = useFormProviderContext();

  return (
    <div className="info-page">
      <div className="info-box">
        <h2>Phone Page</h2>
        <div className="info-div">
          <h4>phone :</h4>
          <input
            onChange={handleChange}
            value={formData.phone ?? ""}
            name="phone"
            type="text"
            placeholder="insert your phone number"
            className="name-inp"
          />
        </div>
        <div className="info-div">
          <h4>Email :</h4>
          <input
            onChange={handleChange}
            value={formData.email ?? ""}
            name="email"
            type="email"
            placeholder="insert your email@"
            className="name-inp"
          />
        </div>
        <div className="info-div">
          <h4>Adress :</h4>
          <input
            onChange={handleChange}
            value={formData.adrass ?? ""}
            name="adrass"
            type="text"
            placeholder="insert your adress"
            className="name-inp"
          />
        </div>
      </div>
    </div>
  );
};

export default Phone;
