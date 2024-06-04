import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './chatbot.scss'

function Chatbot(props) {
  return (
    <div className="chatbot">
      <Helmet>
        <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
        <script
          src="https://mediafiles.botpress.cloud/e46cb8fb-ca6e-4b84-8a6a-986d211bf4be/webchat/config.js"
          defer></script>
      </Helmet>
    </div>
  )
}

export default Chatbot
