'use client';

import { useEffect } from 'react';
import Script from 'next/script';

type InitOptions = {
  host?: string;
  botId?: string;
  // add other options your Botpress instance requires
};

const BOTPRESS_SRC = 'https://your-botpress-host.com/webchat/v0/inject.js'; // <<— use the real URL

export default function BotpressWidget({ host, botId }: InitOptions) {
  useEffect(() => {
    // optional: safe-check if already initialized (avoid double init)
    if ((window as any).botpressWebChatInitialized) return;
  }, []);

  return (
    <>
      <Script
        src={BOTPRESS_SRC}
        strategy="afterInteractive"           // load after the page is interactive
        onLoad={() => {
          // common init pattern — adapt to your Botpress version
          try {
            const w = window as any;
            if (w.botpressWebChat && typeof w.botpressWebChat.init === 'function') {
              w.botpressWebChat.init({
                host: host ?? 'https://your-botpress-host.com',
                botId: botId ?? 'my-bot-id'
                // ...other options (showCloseButton, lang, etc.)
              });
              w.botpressWebChatInitialized = true;
            } else {
              console.warn('Botpress script loaded but init API not found.');
            }
          } catch (err) {
            console.error('Botpress init failed:', err);
          }
        }}
        // onError={(e) => {
        //   console.error('Failed to load Botpress script', e);
        // }}
      />
    </>
  );
}
