import { Form, Input, Button, Checkbox, Divider, message } from 'antd';
import Link from "next/link"
import { auth } from "../lib/firebase"
import { useRouter } from 'next/router'

const layout = {
    labelCol: { span: 6 },
};

export default function SignIn() {

    const router = useRouter()

    const onSubmit = async (values: any) => {
        try {
            await auth.signInWithEmailAndPassword(values.email, values.password)
            message.success("Successfully signed in")
            router.push("/")

        } catch (error) {
            console.error(error)
            message.success("Something went wrong. ")
        }

    };

    return (
        <main>
            <div className="signin-container">
                <h1>Sign In</h1>
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
                    <Divider />

                    <Link href="/signup">
                        <a><strong>Create an account</strong></a>
                    </Link>

                </Form>
            </div>
        </main>
    )
}