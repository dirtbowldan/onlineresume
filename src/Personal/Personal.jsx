import "./Personal.scss";
import Typewriter from "typewriter-effect";

const Personal = () => {
  return (
    <div className="container-fluid">
      <div className="row dflex justify-content-center">
        <div className="col imgs d-flex align-items-center justify-content-center">
          <img height={300} className="img" src="/bren-head.jpg" />
        </div>
        <div className="col flex-column d-flex justify-content-center text-left">
          <h1>Brendan Fusik</h1>
          <h3>
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter

                  .typeString("Skilled Programmer")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Audio Engineer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Producer Songwriter")
                  .pauseFor(1000)
                  .deleteAll()

                  .start();
              }}
            />
          </h3>
          <h6>Email: brendanfusik@gmail.com</h6>
          <h6>Phone: (919) 534-5339 </h6>

          <p>
            Highly diligent, self-driven, problem solving, software engineer
            looking to contribute to a growing organization. Possesses strong
            organizational and people skills, thrives in fast paced environments
            with little supervision, and easily trainable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Personal;
