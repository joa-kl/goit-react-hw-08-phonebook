import { RegisterForm } from "components/RegisterForm/RegisterForm"
import { Helmet } from "react-helmet-async"

export const RegisterPage = () => {
    return (
        <div>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <RegisterForm />
        </div>
    )
}