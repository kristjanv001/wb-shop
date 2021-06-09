import { Form, Input, Button, Checkbox, message } from 'antd';
import Link from "next/link"
import { auth } from "../lib/firebase"
import { useRouter } from 'next/router'

const layout = {
    labelCol: { span: 6 },
};

export default function SignUp() {

    const router = useRouter()

    const onSubmit = async (values: any) => {
        try {
            await auth.createUserWithEmailAndPassword(values.email, values.password)
            message.success("Sign Up successful!")
            router.push("/")

        } catch (error) {
            console.error(error)
            message.success("Something went wrong. Account not created.")
        }
    };


    return (
        <main>
            <div className="signin-container">
                <h1>Sign Up</h1>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onSubmit}
                >


                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item >
                        <Button block type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                    <Link href="/signin">
                        <a><strong>Already have an account? Sign in instead!</strong></a>
                    </Link>

                </Form>
            </div>
        </main>
    )
}