import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { server } from '../server';

const SellerActivationPage = () => {

    const { activation_token } = useParams();

    const [error, setError] = useState(false)

    useEffect(() => {
        if (activation_token) {
            const sendRequest = async () => {
                try {
                    await axios.post(`${server}/shop/activation`, {
                        activation_token,
                    }).then((res) => {
                        console.log(res)
                    })
                } catch (error) {
                    setError(true)
                }
            }
            sendRequest();
        }
    }, [])

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            {
                error ? (
                    <p>Your Token is Expired</p>
                ) : (
                    <p>Your account has been created successfully|</p>
                )
            }

        </div>
    )
}

export default SellerActivationPage
