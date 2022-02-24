import React from "react";
import Layout from "../containers/Layout";
import Login from "../containers/login";
import '../styles/global.scss';

const App = () => {
    return (
        <Layout>
            <Login />
        </Layout>
    );
}

export default App;