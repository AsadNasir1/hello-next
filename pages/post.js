import useRouter from 'next/router';
import Layout from '../components/layout';

const Content = props => {
    return (
        <div>
            <h1>Below is the post from title</h1>
            <p>{useRouter.query.title}</p>
        </div>
    )
}


export default function Post(){
    return (
        <Layout>
            <Content />
        </Layout>
    )
}