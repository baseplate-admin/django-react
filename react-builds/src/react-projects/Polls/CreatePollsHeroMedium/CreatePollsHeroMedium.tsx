import OneIcon from "./one";
import QuestionIcon from "./question";
import ThreeIcon from "./three";
import TwoIcon from "./two";
import FourIcon from './four';
export default function CreatePollsHeroMedium(){
    return(
        <section className="container hero is-medium">
        <div className="hero-body">
            <div className="container">
                <div className="field">
                    <div
                        className="control has-icons-left has-icons-right"
                        style={{textAlign: 'center'}}
                    >
                        <span className="icon is-small">
                            <QuestionIcon />
                        </span>
                        <input
                            name="question"
                            className="input is-primary"
                            type="text"
                            placeholder="Question"
                            style={{width: 400}}
                        />
                    </div>
                </div>
                <div className="field" style={{textAlign: 'center'}}>
                    <div className="control has-icons-left has-icons-right">
                        <span className="icon is-small">
                            <OneIcon />
                        </span>
                        <input
                            name="option1"
                            className="input is-info"
                            type="text"
                            placeholder="Option No: 1"
                            style={{width: 400}}
                        />
                    </div>
                </div>
                <div className="field" style={{textAlign: 'center'}}>
                    <div className="control has-icons-left has-icons-right">
                        <span className="icon is-small">
                            <TwoIcon />
                        </span>
                        <input
                            name="option2"
                            className="input is-success"
                            type="text"
                            placeholder="Option No: 2"
                            style={{width: 400}}                        />
                    </div>
                </div>
                <div className="field" style={{textAlign: 'center'}}>
                    <div className="control has-icons-left has-icons-right">
                        <span className="icon is-small">
                            <ThreeIcon />
                        </span>
                        <input
                            name="option3"
                            className="input is-warning"
                            type="text"
                            placeholder="Option No: 3"
                            style={{width: 400}}                        />
                    </div>
                </div>
                <div className="field">
                    <div
                        className="control has-icons-left has-icons-right"
                        style={{textAlign: 'center'}}
                    >
                        <span className="icon is-small">
                            <FourIcon />
                        </span>
                        <input
                            name="option4"
                            className="input is-danger"
                            type="text"
                            placeholder="Option No: 4"
                            style={{width: 400}}                        />
                    </div>
                </div>
                <div className="control" style={{textAlign: 'center'}}>
                    <input
                        type="submit"
                        value="Create"
                        className="button is-primary"
                    />
                </div>
            </div>
        </div>
    </section>
    )
}