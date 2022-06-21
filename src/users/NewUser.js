import { useState } from "react";
export default function NewUser() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        userName: "",
        password: "",
        confrim: "",

    });
    const [errors, setErrors] = useState({
        nameError: null,
        emailError: null,
        userNameError: null,
        passwordError: null,
        confirmError: null,
    });
    const handleChange = (evet) => {

        if (evet.target.name == "name") {
            setUser({ ...user, name: evet.target.value })
        } else if (evet.target.name == "email") {
            setUser({ ...user, email: evet.target.value })
        } else if (evet.target.name == "username") {
            setUser({ ...user, userName: evet.target.value })
        } else if (evet.target.name == "Password") {
            setUser({ ...user, password: evet.target.value })
        } else if (evet.target.name == "Confirm") {
            setUser({ ...user, confrim: evet.target.value })
        }


        if (evet.target.name == "name") {
            setErrors({
                ...errors, nameError:
                    evet.target.value.length == 0
                        ? "This field is required"
                        : null,

            })
        }
        else if (evet.target.name == "email") {
            setErrors({
                ...errors, emailError:
                    evet.target.value.length == 0
                        ? "This field is required"
                        : null,

            })
        }
        else if (evet.target.name == "username") {
            setErrors({
                ...errors, userNameError:
                    evet.target.value.length == 0
                        ? "This field is required"
                        : null,

            })
        }
        else if (evet.target.name == "Password") {
            setErrors({
                ...errors, passwordError:
                    evet.target.value.length == 0
                        ? "This field is required"
                        : null,

            })
        }
        else if (evet.target.name == "Confirm") {
            setErrors({
                ...errors, confirmError:
                    evet.target.value.length == 0
                        ? "This field is required"
                        : null,

            })
        }
    }
    return (<>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
            <input type="text"
                className={`form-control ${(errors.nameError)?'border-danger':''}`}
                name="name"
                value={user.name}
                onChange={(e) => {
                    handleChange(e);
                }}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
            <input type="email" className={`form-control ${(errors.emailError)?'border-danger':''}`}
                name="email"
                value={user.email}
                onChange={(e) => {
                    handleChange(e);
                }}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">User Name</label>
            <input type="text" className={`form-control ${(errors.userNameError)?'border-danger':''}`}
                name="username"
                value={user.userName}
                onChange={(e) => {
                    handleChange(e);
                }}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
            <input type="text" className={`form-control ${(errors.passwordError)?'border-danger':''}`}
                name="Password"
                value={user.password}
                onChange={(e) => {
                    handleChange(e);
                }}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">Confirm Password</label>
            <input type="text" className={`form-control ${(errors.confirmError)?'border-danger':''}`}
                name="Confirm"
                value={user.confrim}
                onChange={(e) => {
                    handleChange(e);
                }}
            />
        </div>
    </>
    )
}