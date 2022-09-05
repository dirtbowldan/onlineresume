import "./Personal.scss"

const Personal = () => {
  return (
    <div className="container-fluid">
      
      <div className="row dflex justify-content-center">
        <div className="col imgs d-flex align-items-center justify-content-center">
          <img
            height={300}
            className="img"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGDUIp_o8p9FQ/profile-displayphoto-shrink_200_200/0/1615210144797?e=1667433600&v=beta&t=D2rFkuOQYogOKpz_xyk0zYJSCmpLnt9HfuR6P0qAyoA"
          />
        </div>
        <div className="col flex-column d-flex justify-content-center text-left">
          <h1>Brendan Fusik</h1>
          <h3>Skilled Programmer</h3>
          <h6>Email: brendanfusik@gmail.com</h6>
          <h6>Phone: (919) 534-5339 </h6>

          <p>
            Highly diligent, self-driven, problem solving, professional.
            Possesses strong organizational and problem solving skills, thrives
            in fast paced environments with clearly defined goals. Easily
            trainable and diligently self-trains when necessary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Personal;
