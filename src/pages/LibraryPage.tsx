import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';

const LibraryPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Library</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Favorite Songs</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Favorite Albums</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Recently Played</IonLabel>
          </IonItem>
          {/* Tambahkan konten lainnya sesuai kebutuhan */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default LibraryPage;
