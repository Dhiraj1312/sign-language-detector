import requests
import pygame
import io

def voice_speaker(text) :

    url = "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM/stream"

    payload = {
        "model_id": "eleven_monolingual_v1",
        "text": text ,
        "voice_settings": {
            "similarity_boost": 0.5,
            "stability": 0.5
        }
    }
    headers = {
        "xi-api-key": "2eca0c0989bbee44e24ac2a233df7bbc",
        "Content-Type": "application/json"
    }

    response = requests.request("POST", url, json=payload, headers=headers)

    if response.status_code == 200:
    
        pygame.init()
        pygame.mixer.init()
        pygame.mixer.music.load(io.BytesIO(response.content))
        pygame.mixer.music.play()

        # Wait for playback to finish
        while pygame.mixer.music.get_busy():
            pygame.time.Clock().tick(10)

        pygame.mixer.quit()

    else:
        print(f"Error: {response.status_code}, {response.text}")