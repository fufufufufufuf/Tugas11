import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonLabel, IonFooter, IonRow, IonCol, IonIcon } from '@ionic/react';
import { playSharp, pause } from 'ionicons/icons';
import './HomePage.css'
import Bili from '../components/bili alis.jpeg';

const HomePage: React.FC = () => {
  const playlists = [
    { id: 1, name: 'Discover Weekly', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Daily Mix 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Release Radar', imageUrl: 'https://via.placeholder.com/150' }
  ];

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Di sini Anda dapat menambahkan logika untuk memutar atau menghentikan lagu sesuai dengan nilai isPlaying
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Spotify Clone</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {playlists.map(playlist => (
            <IonItem key={playlist.id}>
              <IonAvatar slot="start">
                <img src={playlist.imageUrl} alt="Playlist Cover" />
              </IonAvatar>
              <IonLabel>{playlist.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <IonFooter>
        <div className="player">
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
          <IonRow className="ion-no-padding">
            <IonCol size="2" className="ion-no-padding">
              <img src={Bili} alt="Album Cover" />
            </IonCol>
            <IonCol size="8" className="ion-align-self-center">
              <b>All the Good Girls Go to Hell</b><br />
              <span>Billie Eilish</span>
            </IonCol>
            <IonCol size="2" className="ion-text-center ion-no-padding ion-align-self-center">
              <IonIcon name={isPlaying ? pause : playSharp} color="light" size="large" onClick={togglePlay} />
            </IonCol>
          </IonRow>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default HomePage;
