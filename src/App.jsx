import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut
} from 'firebase/auth';
import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc,
    collection, 
    addDoc, 
    onSnapshot,
    updateDoc,
    arrayUnion,
    arrayRemove,
    runTransaction,
    deleteDoc,
    increment,
    getDocs,
    query,
    where,
    documentId
} from 'firebase/firestore';
import { getDatabase, ref, onValue, set, onDisconnect, serverTimestamp } from "firebase/database";

// --- Firebase Configuration ---
const firebaseConfig = {
  apiKey: "AIzaSyBVcDX9Ut7Jb4u_QE1w4F4yevKpF8Ci_tg",
  authDomain: "undercover-5dd71.firebaseapp.com",
  projectId: "undercover-5dd71",
  storageBucket: "undercover-5dd71.firebasestorage.app",
  messagingSenderId: "213129592280",
  appId: "1:213129592280:web:3103669e4fee85d9b986ad",
  measurementId: "G-4XCML5NCTM"
};

// --- Firebase Initialization ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const rtdb = getDatabase(app); 

// --- Icons (SVG) ---
const EyeIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>;
const EyeOffIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.242 4.242a4 4 0 00-5.656 5.656l1.414-1.414a2 2 0 012.828-2.828l1.414-1.414zM10 17a7 7 0 01-7-7c0-1.551.48-3.006 1.332-4.243L15.243 14.668A6.96 6.96 0 0110 17z" clipRule="evenodd" /></svg>;
const UserPlusIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>;
const TrashIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>;

// --- Word List (150 pairs) ---
const wordPairs = [
    { civilian: "Café", undercover: "Thé" }, { civilian: "Chien", undercover: "Chat" }, { civilian: "Soleil", undercover: "Lune" },
    { civilian: "Plage", undercover: "Montagne" }, { civilian: "Livre", undercover: "Film" }, { civilian: "Piano", undercover: "Guitare" },
    { civilian: "Paris", undercover: "Londres" }, { civilian: "Pizza", undercover: "Burger" }, { civilian: "Été", undercover: "Hiver" },
    { civilian: "Voiture", undercover: "Avion" }, { civilian: "Fruit", undercover: "Légume" }, { civilian: "Peinture", undercover: "Dessin" },
    { civilian: "Danse", undercover: "Chant" }, { civilian: "Football", undercover: "Basketball" }, { civilian: "Serpent", undercover: "Lézard" },
    { civilian: "Médecin", undercover: "Infirmier" }, { civilian: "Rêve", undercover: "Cauchemar" }, { civilian: "Chaise", undercover: "Tabouret" },
    { civilian: "Chemise", undercover: "T-shirt" }, { civilian: "Amour", undercover: "Amitié" }, { civilian: "Guerre", undercover: "Paix" },
    { civilian: "Ordinateur", undercover: "Tablette" }, { civilian: "Forêt", undercover: "Désert" }, { civilian: "Rivière", undercover: "Océan" },
    { civilian: "Sucre", undercover: "Sel" }, { civilian: "Or", undercover: "Argent" }, { civilian: "Jour", undercover: "Nuit" },
    { civilian: "Chaud", undercover: "Froid" }, { civilian: "Rire", undercover: "Sourire" }, { civilian: "Magie", undercover: "Science" },
    { civilian: "Héros", undercover: "Méchant" }, { civilian: "Vitesse", undercover: "Lenteur" }, { civilian: "Lumière", undercover: "Ombre" },
    { civilian: "Roi", undercover: "Reine" }, { civilian: "Poésie", undercover: "Prose" }, { civilian: "Théâtre", undercover: "Cinéma" },
    { civilian: "Violon", undercover: "Violoncelle" }, { civilian: "Miel", undercover: "Confiture" }, { civilian: "Bateau", undercover: "Navire" },
    { civilian: "Fée", undercover: "Sorcier" }, { civilian: "Dragon", undercover: "Griffon" }, { civilian: "Château", undercover: "Palais" },
    { civilian: "Épée", undercover: "Bouclier" }, { civilian: "Flèche", undercover: "Lance" }, { civilian: "Fantôme", undercover: "Zombie" },
    { civilian: "Vampire", undercover: "Loup-garou" }, { civilian: "Robot", undercover: "Cyborg" }, { civilian: "Galaxie", undercover: "Nébuleuse" },
    { civilian: "Planète", undercover: "Étoile" }, { civilian: "Comète", undercover: "Astéroïde" }, { civilian: "Volcan", undercover: "Geyser" },
    { civilian: "Tornade", undercover: "Ouragan" }, { civilian: "Neige", undercover: "Pluie" }, { civilian: "Glace", undercover: "Eau" },
    { civilian: "Feu", undercover: "Fumée" }, { civilian: "Vent", undercover: "Brise" }, { civilian: "Sable", undercover: "Terre" },
    { civilian: "Roche", undercover: "Pierre" }, { civilian: "Diamant", undercover: "Rubis" }, { civilian: "Journal", undercover: "Magazine" },
    { civilian: "Radio", undercover: "Télévision" }, { civilian: "Téléphone", undercover: "Smartphone" }, { civilian: "Lettre", undercover: "Email" },
    { civilian: "Pont", undercover: "Tunnel" }, { civilian: "Route", undercover: "Autoroute" }, { civilian: "Train", undercover: "Métro" },
    { civilian: "Bus", undercover: "Tramway" }, { civilian: "Vélo", undercover: "Moto" }, { civilian: "Jardin", undercover: "Parc" },
    { civilian: "Fleur", undercover: "Arbre" }, { civilian: "Herbe", undercover: "Mousse" }, { civilian: "Champignon", undercover: "Truffe" },
    { civilian: "Loup", undercover: "Renard" }, { civilian: "Ours", undercover: "Panda" }, { civilian: "Aigle", undercover: "Faucon" },
    { civilian: "Hibou", undercover: "Chouette" }, { civilian: "Baleine", undercover: "Dauphin" }, { civilian: "Requin", undercover: "Orque" },
    { civilian: "Crabe", undercover: "Crevette" }, { civilian: "Papillon", undercover: "Libellule" }, { civilian: "Abeille", undercover: "Guêpe" },
    { civilian: "Fourmi", undercover: "Termite" }, { civilian: "Araignée", undercover: "Scorpion" }, { civilian: "Chocolat", undercover: "Vanille" },
    { civilian: "Fraise", undercover: "Framboise" }, { civilian: "Pomme", undercover: "Poire" }, { civilian: "Banane", undercover: "Orange" },
    { civilian: "Raisin", undercover: "Cerise" }, { civilian: "Pain", undercover: "Baguette" }, { civilian: "Fromage", undercover: "Yaourt" },
    { civilian: "Vin", undercover: "Bière" }, { civilian: "Jus", undercover: "Soda" }, { civilian: "Soupe", undercover: "Salade" },
    { civilian: "Pâtes", undercover: "Riz" }, { civilian: "Gâteau", undercover: "Tarte" }, { civilian: "Biscuit", undercover: "Cookie" },
    { civilian: "Bonbon", undercover: "Caramel" }, { civilian: "École", undercover: "Université" }, { civilian: "Professeur", undercover: "Élève" },
    { civilian: "Bibliothèque", undercover: "Librairie" }, { civilian: "Hôpital", undercover: "Clinique" }, { civilian: "Police", undercover: "Pompier" },
    { civilian: "Soldat", undercover: "Général" }, { civilian: "Président", undercover: "Premier ministre" }, { civilian: "Juge", undercover: "Avocat" },
    { civilian: "Artiste", undercover: "Artisan" }, { civilian: "Musicien", undercover: "Compositeur" }, { civilian: "Acteur", undercover: "Réalisateur" },
    { civilian: "Écrivain", undercover: "Poète" }, { civilian: "Scientifique", undercover: "Chercheur" }, { civilian: "Inventeur", undercover: "Ingénieur" },
    { civilian: "Explorateur", undercover: "Aventurier" }, { civilian: "Pirate", undercover: "Corsaire" }, { civilian: "Ninja", undercover: "Samouraï" },
    { civilian: "Cowboy", undercover: "Shérif" }, { civilian: "Détective", undercover: "Espion" }, { civilian: "Journaliste", undercover: "Photographe" },
    { civilian: "Cuisinier", undercover: "Pâtissier" }, { civilian: "Boulanger", undercover: "Boucher" }, { civilian: "Fermier", undercover: "Jardinier" },
    { civilian: "Pilote", undercover: "Astronaute" }, { civilian: "Capitaine", undercover: "Matelot" }, { civilian: "Joie", undercover: "Bonheur" },
    { civilian: "Tristesse", undercover: "Mélancolie" }, { civilian: "Colère", undercover: "Rage" }, { civilian: "Peur", undercover: "Anxiété" },
    { civilian: "Surprise", undercover: "Étonnement" }, { civilian: "Courage", undercover: "Bravoure" }, { civilian: "Sagesse", undercover: "Intelligence" },
    { civilian: "Beauté", undercover: "Charme" }, { civilian: "Force", undercover: "Puissance" }, { civilian: "Chance", undercover: "Destin" },
    { civilian: "Histoire", undercover: "Légende" }, { civilian: "Mythe", undercover: "Conte" }, { civilian: "Secret", undercover: "Mystère" },
    { civilian: "Silence", undercover: "Calme" }, { civilian: "Bruit", undercover: "Son" }, { civilian: "Couleur", undercover: "Nuance" },
    { civilian: "Forme", undercover: "Silhouette" }, { civilian: "Début", undercover: "Fin" }, { civilian: "Cause", undercover: "Conséquence" }
];

// --- Main App Component ---
export default function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [screen, setScreen] = useState('splash');
    const [onlineGameId, setOnlineGameId] = useState(null);
    const [localGameData, setLocalGameData] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser && !currentUser.isAnonymous && screen === 'auth') {
                setScreen('lobby');
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [screen]);

    useEffect(() => {
        if (user && !user.isAnonymous) {
            const userStatusDatabaseRef = ref(rtdb, 'status/' + user.uid);
            const userStatusFirestoreRef = doc(db, 'userProfiles', user.uid);

            const isOnline = {
                state: 'online',
                last_changed: serverTimestamp(),
            };

            const isOffline = {
                state: 'offline',
                last_changed: serverTimestamp(),
            };

            onValue(ref(rtdb, '.info/connected'), (snapshot) => {
                if (snapshot.val() === false) {
                    return;
                }
                onDisconnect(userStatusDatabaseRef).set(isOffline).then(() => {
                    set(userStatusDatabaseRef, isOnline);
                    updateDoc(userStatusFirestoreRef, { state: 'online' }).catch(err => {
                        if (err.code !== 'not-found') console.error("Error setting online status:", err)
                    });
                }).catch(err => console.error("Error setting onDisconnect:", err));
            });
        }
    }, [user]);

    const handleSignOut = async () => {
        if(user && !user.isAnonymous) {
            const userStatusDatabaseRef = ref(rtdb, 'status/' + user.uid);
            const userProfileRef = doc(db, 'userProfiles', user.uid);
            try {
                await set(userStatusDatabaseRef, { state: 'offline', last_changed: serverTimestamp() });
                await updateDoc(userProfileRef, { state: 'offline' });
            } catch (err) {
                console.error("Error signing out:", err);
            }
        }
        await signOut(auth);
        setScreen('welcome');
        setOnlineGameId(null);
    };

    if (loading) {
        return <div className="flex items-center justify-center h-screen bg-gray-900 text-white">Chargement...</div>;
    }

    const renderScreen = () => {
        switch (screen) {
            case 'splash': return <SplashScreen onFinish={() => setScreen('welcome')} />;
            case 'welcome': return <WelcomeScreen setScreen={setScreen} />;
            case 'auth': return <AuthScreen setScreen={setScreen} />;
            case 'lobby': return <Lobby user={user} setScreen={setScreen} setOnlineGameId={setOnlineGameId} onSignOut={handleSignOut} />;
            case 'onlineGame': return <GameRoom gameId={onlineGameId} user={user} setScreen={setScreen} setOnlineGameId={setOnlineGameId} />;
            case 'offlineSetup': return <OfflineSetup setScreen={setScreen} setLocalGameData={setLocalGameData} />;
            case 'offlineGame': return <OfflineGame localGameData={localGameData} setScreen={setScreen} />;
            default: return <WelcomeScreen setScreen={setScreen} />;
        }
    };

    return <div className="min-h-screen bg-gray-900 text-white font-sans">{renderScreen()}</div>;
}

// --- Splash Screen Component ---
function SplashScreen({ onFinish }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 4000); 
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-900 overflow-hidden">
            <style>
                {`
                    @keyframes rotate-in {
                        0% {
                            transform: rotateY(-180deg) scale(0.5);
                            opacity: 0;
                        }
                        100% {
                            transform: rotateY(0deg) scale(1);
                            opacity: 1;
                        }
                    }
                    .rotate-text {
                        animation: rotate-in 2.5s ease-out forwards;
                    }
                `}
            </style>
            <h1 className="rotate-text text-5xl md:text-7xl font-black text-white tracking-wider" style={{ textShadow: '0 0 20px rgba(192, 192, 192, 0.5)' }}>
                PANKOSS GAME
            </h1>
        </div>
    );
}

// --- Welcome Screen ---
function WelcomeScreen({ setScreen }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 p-4">
            <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-xl shadow-lg text-center">
                <h1 className="text-5xl font-bold text-white tracking-wider">UNDERCOVER</h1>
                <p className="text-lg text-gray-300">Choisissez votre mode de jeu</p>
                <div className="space-y-4 pt-4">
                    <button onClick={() => setScreen('auth')} className="w-full py-4 text-xl font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition transform hover:scale-105">Jouer en Ligne</button>
                    <button onClick={() => setScreen('offlineSetup')} className="w-full py-4 text-xl font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 transition transform hover:scale-105">Jouer Hors Ligne</button>
                </div>
            </div>
        </div>
    );
}

// --- Auth Screen ---
function AuthScreen({ setScreen }) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleAuth = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                if (!pseudo.trim()) {
                    setError("Le pseudo est requis.");
                    return;
                }
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const userProfileRef = doc(db, 'userProfiles', userCredential.user.uid);
                await setDoc(userProfileRef, {
                    email: userCredential.user.email,
                    pseudo: pseudo,
                    score: 0,
                    state: 'online',
                });
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-indigo-400">{isLogin ? 'Connexion' : 'Inscription'}</h2>
                <form onSubmit={handleAuth} className="space-y-4 mt-4">
                    {!isLogin && (
                         <div>
                            <label className="text-sm font-bold text-gray-400">Pseudo</label>
                            <input type="text" value={pseudo} onChange={(e) => setPseudo(e.target.value)} className="w-full p-3 mt-1 text-white bg-gray-700 rounded-lg border border-gray-600 focus:border-indigo-500 outline-none transition" required />
                        </div>
                    )}
                    <div>
                        <label className="text-sm font-bold text-gray-400">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 mt-1 text-white bg-gray-700 rounded-lg border border-gray-600 focus:border-indigo-500 outline-none transition" required />
                    </div>
                    <div>
                        <label className="text-sm font-bold text-gray-400">Mot de passe</label>
                        <div className="relative">
                           <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 mt-1 text-white bg-gray-700 rounded-lg border border-gray-600 focus:border-indigo-500 outline-none transition" required />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-400 hover:text-white">{showPassword ? <EyeOffIcon className="h-5 w-5"/> : <EyeIcon className="h-5 w-5"/>}</button>
                        </div>
                    </div>
                    {error && <p className="text-red-400 text-sm">{error}</p>}
                    <button type="submit" className="w-full py-3 font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105">{isLogin ? 'Se connecter' : "S'inscrire"}</button>
                </form>
                <p className="text-center text-gray-400 mt-4">
                    {isLogin ? "Pas de compte ?" : 'Déjà un compte ?'}
                    <button onClick={() => setIsLogin(!isLogin)} className="font-bold text-indigo-400 hover:underline ml-2">{isLogin ? 'Inscrivez-vous' : 'Connectez-vous'}</button>
                </p>
                <button onClick={() => setScreen('welcome')} className="w-full mt-4 py-2 text-sm font-semibold text-gray-300 bg-gray-600 rounded-lg hover:bg-gray-700 transition">Retour</button>
            </div>
        </div>
    );
}

// --- Lobby Component (Online) ---
function Lobby({ user, setScreen, setOnlineGameId, onSignOut }) {
    const [joinCode, setJoinCode] = useState('');
    const [error, setError] = useState('');
    const [userProfile, setUserProfile] = useState(null);
    const [onlinePlayers, setOnlinePlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const generateGameId = (length = 6) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    useEffect(() => {
        if (!user || user.isAnonymous) return;
        
        const userProfileRef = doc(db, 'userProfiles', user.uid);
        const unsubscribeProfile = onSnapshot(userProfileRef, (doc) => {
            if (doc.exists()) {
                setUserProfile(doc.data());
            } else {
                setDoc(userProfileRef, { email: user.email, pseudo: "Nouveau Joueur", score: 0 });
            }
        }, err => console.error("Error reading user profile:", err));

        const onlineUsersRef = query(collection(db, 'userProfiles'), where("state", "==", "online"));
        const unsubscribeOnline = onSnapshot(onlineUsersRef, (snapshot) => {
            const players = snapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(p => p.id !== user.uid); 
            setOnlinePlayers(players);
        }, err => console.error("Error reading online players:", err));

        return () => {
            unsubscribeProfile();
            unsubscribeOnline();
        };
    }, [user]);
    
    const createGame = async () => {
        if (!userProfile || !userProfile.pseudo) {
            setError("Profil en cours de chargement, veuillez patienter...");
            return;
        }
        setError('');
        setIsLoading(true);
        try {
            let newGameId;
            let idExists = true;
            while (idExists) {
                newGameId = generateGameId();
                const gameDocRef = doc(db, 'games', newGameId);
                const gameSnap = await getDoc(gameDocRef);
                idExists = gameSnap.exists();
            }

            const host = { uid: user.uid, pseudo: userProfile.pseudo, isHost: true };
            await setDoc(doc(db, 'games', newGameId), {
                host, players: [host], createdAt: new Date(), status: 'waiting',
            });
            
            setOnlineGameId(newGameId);
            setScreen('onlineGame');
        } catch (err) { 
            console.error(err); 
            setError("Impossible de créer la partie."); 
        } finally {
            setIsLoading(false);
        }
    };

    const joinGame = async () => {
        if (!userProfile || !userProfile.pseudo) {
            setError("Profil en cours de chargement, veuillez patienter...");
            return;
        }
        setError('');
        if (!joinCode.trim()) { setError("Veuillez entrer un code de partie."); return; }
        try {
            const gameRef = doc(db, 'games', joinCode.toUpperCase());
            const gameSnap = await getDoc(gameRef);
            if (gameSnap.exists()) {
                const gameData = gameSnap.data();
                if (gameData.players.some(p => p.uid === user.uid)) { setOnlineGameId(joinCode.toUpperCase()); setScreen('onlineGame'); return; }
                if (gameData.status !== 'waiting') { setError("Cette partie a déjà commencé ou est terminée."); return; }
                await updateDoc(gameRef, { players: arrayUnion({ uid: user.uid, pseudo: userProfile.pseudo, isHost: false }) });
                setOnlineGameId(joinCode.toUpperCase());
                setScreen('onlineGame');
            } else { setError("Partie non trouvée."); }
        } catch (err) { console.error(err); setError("Impossible de rejoindre la partie."); }
    };

    return (
        <div className="min-h-screen bg-gray-900 p-4 lg:p-8">
            <div className="absolute top-4 right-4 flex space-x-2">
                 <button onClick={() => setScreen('welcome')} className="px-4 py-2 text-sm font-semibold bg-gray-600 rounded-lg hover:bg-gray-700 transition">Changer de mode</button>
                 <button onClick={onSignOut} className="px-4 py-2 text-sm font-semibold bg-red-600 rounded-lg hover:bg-red-700 transition">Déconnexion</button>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white mb-2">Bienvenue,</h1>
                        <p className="text-indigo-400 text-lg mb-2">{userProfile?.pseudo || user.email}</p>
                        <p className="text-2xl text-yellow-400 font-bold mb-10">Score: {userProfile?.score || 0}</p>
                    </div>
                    <div className="space-y-6 w-full max-w-sm mx-auto lg:mx-0">
                        <button onClick={createGame} disabled={isLoading || !userProfile} className="w-full py-4 text-xl font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition transform hover:scale-105 disabled:bg-gray-500">
                            {isLoading ? 'Création...' : 'Créer une Partie'}
                        </button>
                        <div className="relative flex items-center"><hr className="w-full border-gray-600" /><span className="absolute px-3 font-medium text-gray-400 bg-gray-900 -translate-x-1/2 left-1/2">OU</span></div>
                        <div className="space-y-2">
                            <input type="text" value={joinCode} onChange={(e) => setJoinCode(e.target.value)} placeholder="CODE DE PARTIE" className="w-full p-4 text-center tracking-widest text-white bg-gray-800 border-2 border-gray-700 rounded-lg focus:border-indigo-500 outline-none transition uppercase"/>
                             <button onClick={joinGame} disabled={!userProfile} className="w-full py-3 font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105 disabled:bg-gray-500">Rejoindre une Partie</button>
                        </div>
                        {error && <p className="text-red-400 mt-4">{error}</p>}
                    </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-white mb-4">Joueurs en Ligne</h2>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                        {onlinePlayers.length > 0 ? onlinePlayers.map(p => (
                            <div key={p.id} className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                                <span className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></span>
                                <p className="text-gray-200 font-semibold truncate">{p.pseudo}</p>
                            </div>
                        )) : (
                            <p className="text-gray-400">Aucun autre joueur en ligne.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Game Room Component (Online) ---
function GameRoom({ gameId, user, setScreen, setOnlineGameId }) {
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [userProfile, setUserProfile] = useState(null);
    const [pointsGained, setPointsGained] = useState(0);
    const [initialScore, setInitialScore] = useState(0);

    const isHost = game?.host.uid === user.uid;
    const myPlayerInfo = game?.players.find(p => p.uid === user.uid);

    useEffect(() => {
        if (user && !user.isAnonymous) {
            const userProfileRef = doc(db, 'userProfiles', user.uid);
            const unsubscribe = onSnapshot(userProfileRef, (doc) => {
                if (doc.exists()) {
                    setUserProfile(doc.data());
                }
            });
            return () => unsubscribe();
        }
    }, [user]);

    useEffect(() => {
        const gameRef = doc(db, 'games', gameId);
        const unsubscribe = onSnapshot(gameRef, (doc) => {
            if (doc.exists()) { 
                const newGameData = { id: doc.id, ...doc.data() };
                if (game?.status !== 'finished' && newGameData.status === 'finished') {
                    awardPoints(newGameData.winner, newGameData.players);
                }
                if (game?.status !== 'waiting' && newGameData.status === 'waiting') {
                    setPointsGained(0); // Reset for new game
                }
                setGame(newGameData); 
            } else { 
                setError("La partie n'existe plus."); 
                setGame(null); 
                setTimeout(() => { setOnlineGameId(null); setScreen('lobby'); }, 3000); 
            }
            setLoading(false);
        }, (err) => { 
            console.error(err); 
            setError("Erreur de connexion à la partie."); 
            setLoading(false); 
        });
        return () => unsubscribe();
    }, [gameId, setScreen, setOnlineGameId]);
    
    const awardPoints = async (winner, players) => {
        const myInfo = players.find(p => p.uid === user.uid);
        if (!myInfo) return;

        let points = 0;
        if (winner === 'Undercovers' && (myInfo.role === 'Undercover' || myInfo.role === 'Mr. White')) points = 10;
        else if (winner === 'Civilians' && myInfo.role === 'Civilian') points = 2;
        else if (winner === 'Mr. White' && myInfo.role === 'Mr. White') points = 8;
        
        setInitialScore(userProfile.score);
        setPointsGained(points);

        if (points > 0) {
            const playerProfileRef = doc(db, 'userProfiles', myInfo.uid);
            await updateDoc(playerProfileRef, { score: increment(points) });
        }
    };

    const leaveGame = async () => {
        try {
            const gameRef = doc(db, 'games', gameId);
            const gameData = (await getDoc(gameRef)).data();
            if (isHost && gameData.players.length === 1) {
                await deleteDoc(gameRef);
            } else {
                const playerData = gameData.players.find(p => p.uid === user.uid);
                await updateDoc(gameRef, { players: arrayRemove(playerData) });
            }
            setOnlineGameId(null);
            setScreen('lobby');
        } catch (err) { console.error("Error leaving game: ", err); }
    };
    
    const startGame = async () => {
        if (!isHost || game.players.length < 3) return;
        try {
            const gameRef = doc(db, 'games', gameId);
            let players = [...game.players];
            
            for (let i = players.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [players[i], players[j]] = [players[j], players[i]];
            }

            const hasMrWhite = players.length >= 5;
            let assignedPlayers = [];
            let playerIndex = 0;

            if (hasMrWhite) assignedPlayers.push({ ...players[playerIndex++], role: 'Mr. White' });
            assignedPlayers.push({ ...players[playerIndex++], role: 'Undercover' });
            while(playerIndex < players.length) assignedPlayers.push({ ...players[playerIndex++], role: 'Civilian' });

            const finalPlayers = assignedPlayers.map(p => ({ ...p, isEliminated: false, hasVoted: false }));
            const wordPair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
            
            await updateDoc(gameRef, {
                status: 'playing_clues', 
                players: finalPlayers, 
                wordPair: wordPair, 
                votes: {}, 
                eliminatedPlayer: null,
                turn: 0,
                turnOrder: finalPlayers.filter(p => !p.isEliminated).map(p => p.uid),
                clues: {}
            });
        } catch (err) { console.error("Error starting game:", err); }
    };

    const handleGiveClue = async (clue) => {
        const gameRef = doc(db, 'games', gameId);
        const activePlayersUids = game.turnOrder;
        const nextTurnIndex = (game.turn + 1);

        const newClues = {...game.clues, [user.uid]: clue };

        if (nextTurnIndex >= activePlayersUids.length) {
            await updateDoc(gameRef, { status: 'playing_voting', clues: newClues });
        } else {
            await updateDoc(gameRef, { turn: nextTurnIndex, clues: newClues });
        }
    };

    const handleVote = async (votedForUid) => {
        const gameRef = doc(db, 'games', gameId);
        try {
            await runTransaction(db, async (transaction) => {
                const gameDoc = await transaction.get(gameRef);
                if (!gameDoc.exists()) throw "Document does not exist!";
                
                let currentPlayers = gameDoc.data().players;
                let newPlayers = currentPlayers.map(p => p.uid === user.uid ? {...p, hasVoted: true} : p);
                let newVotes = {...gameDoc.data().votes};
                newVotes[votedForUid] = (newVotes[votedForUid] || 0) + 1;

                transaction.update(gameRef, { players: newPlayers, votes: newVotes });

                const allVoted = newPlayers.filter(p => !p.isEliminated).every(p => p.hasVoted);
                if (allVoted) {
                    processElimination(transaction, gameRef, newVotes, newPlayers);
                }
            });
        } catch (e) { console.error("Vote transaction failed: ", e); }
    };

    const processElimination = async (transaction, gameRef, votes, players) => {
        const activePlayers = players.filter(p => !p.isEliminated);
        const voteCounts = Object.values(votes);
        const isPerfectTie = activePlayers.length > 2 && activePlayers.length === voteCounts.length && voteCounts.every(v => v === 1);

        if (isPerfectTie) {
            const resetPlayers = players.map(p => ({...p, hasVoted: false}));
            const newTurnOrder = activePlayers.map(p => p.uid).sort(() => Math.random() - 0.5);
            transaction.update(gameRef, { 
                status: 'playing_clues', 
                players: resetPlayers, 
                votes: {}, 
                clues: {},
                turn: 0,
                turnOrder: newTurnOrder,
                eliminatedPlayer: { pseudo: "Personne (égalité)", role: "Aucun" }
            });
            return;
        }

        let maxVotes = -1;
        let playersToEliminateUids = [];
        for (const uid in votes) {
            if (votes[uid] > maxVotes) {
                maxVotes = votes[uid];
                playersToEliminateUids = [uid];
            } else if (votes[uid] === maxVotes) {
                playersToEliminateUids.push(uid);
            }
        }
        
        const playerToEliminateUid = playersToEliminateUids[Math.floor(Math.random() * playersToEliminateUids.length)];
        const eliminatedPlayer = players.find(p => p.uid === playerToEliminateUid);
        let newPlayers = players.map(p => p.uid === playerToEliminateUid ? {...p, isEliminated: true} : p);
        
        const newActivePlayers = newPlayers.filter(p => !p.isEliminated);
        const newActiveUndercovers = newActivePlayers.filter(p => p.role === 'Undercover');
        const newActiveMrWhite = newActivePlayers.find(p => p.role === 'Mr. White');
        
        let winner = null;
        let nextStatus = 'playing_clues';

        if (newActivePlayers.length <= 2 && newActiveUndercovers.length > 0) {
             winner = 'Undercovers'; nextStatus = 'finished';
        } else if (newActiveUndercovers.length === 0) {
            if (newActiveMrWhite) nextStatus = 'mrWhiteGuess';
            else { winner = 'Civilians'; nextStatus = 'finished'; }
        }

        if (nextStatus === 'finished') {
            transaction.update(gameRef, { status: 'finished', winner: winner, players: newPlayers, eliminatedPlayer: eliminatedPlayer });
        } else if (nextStatus === 'mrWhiteGuess') {
            transaction.update(gameRef, { status: 'mrWhiteGuess', players: newPlayers, eliminatedPlayer: eliminatedPlayer });
        } else {
            const resetPlayers = newPlayers.map(p => ({...p, hasVoted: false}));
            const newTurnOrder = resetPlayers.filter(p => !p.isEliminated).map(p => p.uid);
            transaction.update(gameRef, { 
                status: 'playing_clues', players: resetPlayers, votes: {}, clues: {}, turn: 0, turnOrder: newTurnOrder, eliminatedPlayer: eliminatedPlayer 
            });
        }
    };
    
    const handleMrWhiteGuess = async (guess) => {
        const gameRef = doc(db, 'games', gameId);
        const civilianWord = game.wordPair.civilian;
        let winner = (guess.trim().toLowerCase() === civilianWord.toLowerCase()) ? 'Mr. White' : 'Civilians';
        await updateDoc(gameRef, { status: 'finished', winner: winner });
    };

    const playAgain = async () => {
        if (!isHost) return;
        const gameRef = doc(db, 'games', gameId);
        let players = [...game.players];
        const resetPlayers = players.map(p => ({...p, isEliminated: false, hasVoted: false, role: '', word: ''}));
        await updateDoc(gameRef, { status: 'waiting', winner: null, eliminatedPlayer: null, players: resetPlayers });
        startGame();
    };

    if (loading) return <div className="flex items-center justify-center h-screen bg-gray-900 text-white">Chargement...</div>;
    if (error) return <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-red-400">{error}<button onClick={() => { setOnlineGameId(null); setScreen('lobby'); }} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded">Retour</button></div>;
    if (!game) return null;

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-indigo-400">Partie en Ligne</h1>
                        <p className="text-gray-400">Code: <span className="font-mono bg-gray-800 px-2 py-1 rounded">{game.id}</span></p>
                    </div>
                    <button onClick={leaveGame} className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition">Quitter</button>
                </div>

                {game.status === 'waiting' && <WaitingRoom game={game} isHost={isHost} onStartGame={startGame} />}
                {game.status === 'playing_clues' && myPlayerInfo && <OnlineCluePhase game={game} myPlayerInfo={myPlayerInfo} onGiveClue={handleGiveClue} />}
                {game.status === 'playing_voting' && myPlayerInfo && <OnlineVotingBoard game={game} myPlayerInfo={myPlayerInfo} onVote={handleVote} />}
                {game.status === 'mrWhiteGuess' && myPlayerInfo && <OnlineMrWhiteGuess game={game} myPlayerInfo={myPlayerInfo} onGuess={handleMrWhiteGuess} />}
                {game.status === 'finished' && <OnlineEndScreen game={game} isHost={isHost} onPlayAgain={playAgain} onLeave={() => { setOnlineGameId(null); setScreen('lobby'); }} userProfile={userProfile} pointsGained={pointsGained} initialScore={initialScore} />}
            </div>
        </div>
    );
}

// --- Online Game Sub-components ---
function WaitingRoom({ game, isHost, onStartGame }) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-center">
            <h2 className="text-2xl font-semibold mb-6 text-white">Salle d'attente</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                {game.players.map(player => (
                    <div key={player.uid} className="bg-gray-700 p-4 rounded-lg"><p className="font-semibold truncate">{player.pseudo}</p>{player.isHost && <span className="text-xs text-indigo-400">Hôte</span>}</div>
                ))}
            </div>
            {isHost && (
                <div>
                    <button onClick={onStartGame} disabled={game.players.length < 3} className="px-8 py-3 text-lg font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition disabled:bg-gray-500 disabled:cursor-not-allowed">Lancer la partie ({game.players.length}/10)</button>
                    {game.players.length < 3 && <p className="text-yellow-400 text-sm mt-2">Minimum 3 joueurs requis.</p>}
                </div>
            )}
        </div>
    );
}

function OnlineCluePhase({ game, myPlayerInfo, onGiveClue }) {
    const [clue, setClue] = useState('');
    const currentPlayerTurnUid = game.turnOrder[game.turn];
    const currentPlayerTurn = game.players.find(p => p.uid === currentPlayerTurnUid);
    const isMyTurn = currentPlayerTurn.uid === myPlayerInfo.uid;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (clue.trim()) {
            onGiveClue(clue);
            setClue('');
        }
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
             <div className="text-center bg-gray-700 p-6 rounded-lg mb-6">
                <p className="text-lg text-gray-300">Votre rôle: <span className={`text-xl font-bold ${myPlayerInfo.role === 'Civilian' ? 'text-blue-400' : (myPlayerInfo.role === 'Undercover' ? 'text-red-400' : 'text-gray-200')}`}>{myPlayerInfo.role}</span></p>
                <hr className="my-3 border-gray-600" />
                <p className="text-lg text-gray-300">Votre mot: <span className="text-4xl font-bold text-white tracking-widest uppercase">{myPlayerInfo.role === 'Mr. White' ? '?????' : (myPlayerInfo.role === 'Civilian' ? game.wordPair.civilian : game.wordPair.undercover)}</span></p>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-center">Indices donnés :</h3>
                <div className="grid grid-cols-2 gap-2 text-center">
                    {game.turnOrder.map(uid => game.clues[uid] && (
                        <div key={uid} className="bg-gray-900 p-2 rounded">
                           <p className="font-mono text-lg">{game.clues[uid]}</p>
                           <p className="text-xs text-gray-400">{game.players.find(p => p.uid === uid)?.pseudo}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center p-4 border-2 border-dashed border-indigo-500 rounded-lg">
                <p className="text-lg mb-2">Tour de :</p>
                <p className="text-2xl font-bold text-yellow-400 mb-4">{currentPlayerTurn.pseudo}</p>
                {isMyTurn && (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={clue}
                            onChange={(e) => setClue(e.target.value)}
                            className="w-full max-w-sm p-3 text-center text-white bg-gray-700 rounded-lg border border-gray-600 focus:border-indigo-500 outline-none transition"
                            placeholder="Donnez votre indice..."
                        />
                        <button type="submit" className="mt-3 px-8 py-2 font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">Soumettre</button>
                    </form>
                )}
            </div>
        </div>
    );
}

function OnlineVotingBoard({ game, myPlayerInfo, onVote }) {
    const activePlayers = game.players.filter(p => !p.isEliminated);
    
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-center">Récapitulatif des indices :</h3>
                <div className="grid grid-cols-2 gap-2 text-center">
                     {game.turnOrder.map(uid => game.clues[uid] && (
                        <div key={uid} className="bg-gray-900 p-2 rounded">
                           <p className="font-mono text-lg">{game.clues[uid]}</p>
                           <p className="text-xs text-gray-400">{game.players.find(p => p.uid === uid)?.pseudo}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            {game.eliminatedPlayer && (
                <div className="text-center bg-red-900/50 p-3 rounded-lg mb-6">
                    <p>{game.eliminatedPlayer.pseudo} a été éliminé. C'était un <span className="font-bold">{game.eliminatedPlayer.role}</span>.</p>
                </div>
            )}

            <h3 className="text-xl font-semibold mb-4 text-center">Votez pour éliminer un joueur</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activePlayers.map(p => (
                    <button key={p.uid} onClick={() => onVote(p.uid)} disabled={myPlayerInfo.hasVoted || myPlayerInfo.isEliminated || p.uid === myPlayerInfo.uid}
                        className="w-full p-4 bg-gray-700 rounded-lg text-left transition hover:bg-indigo-800 disabled:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
                        <p className="font-semibold">{p.pseudo}</p>
                        {p.hasVoted && <p className="text-xs text-gray-400">A voté</p>}
                    </button>
                ))}
            </div>
            {myPlayerInfo.hasVoted && <p className="text-center text-green-400 mt-4">Vous avez voté. En attente des autres joueurs...</p>}
        </div>
    );
}

function OnlineMrWhiteGuess({ game, myPlayerInfo, onGuess }) {
    const [guess, setGuess] = useState('');
    const isMrWhite = myPlayerInfo.role === 'Mr. White';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (guess.trim()) {
            onGuess(guess);
        }
    };

    return (
        <div className="text-center bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Tour de Mr. White !</h2>
            {isMrWhite ? (
                <form onSubmit={handleSubmit}>
                    <p className="text-lg mb-4">L'Undercover a été démasqué ! C'est votre chance. Devinez le mot des Civils pour gagner.</p>
                    <input 
                        type="text"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        className="w-full max-w-sm p-3 text-center text-white bg-gray-700 rounded-lg border border-gray-600 focus:border-yellow-500 outline-none transition"
                        placeholder="Entrez votre proposition"
                    />
                    <button type="submit" className="mt-4 px-8 py-3 text-lg font-bold text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 transition">Valider</button>
                </form>
            ) : (
                <p className="text-lg">En attente de la proposition de Mr. White...</p>
            )}
        </div>
    );
}


function OnlineEndScreen({ game, isHost, onPlayAgain, onLeave, userProfile, pointsGained, initialScore }) {
    return (
        <div className="text-center bg-gray-800 p-8 rounded-lg">
            <h2 className="text-5xl font-bold text-yellow-400 mb-4">Partie Terminée !</h2>
            <p className="text-3xl text-white mb-8">Les <span className="font-bold">{game.winner}</span> ont gagné !</p>
            <div className="w-full max-w-md mx-auto bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Rôles finaux :</h3>
                {game.players.map(p => (
                     <div key={p.uid} className={`flex justify-between items-center p-2 ${p.isEliminated ? 'opacity-60' : ''}`}>
                         <span className={`font-semibold ${p.isEliminated ? 'line-through' : ''}`}>{p.pseudo}</span>
                         <span className={p.role === 'Civilian' ? 'text-blue-400' : (p.role === 'Undercover' ? 'text-red-400' : 'text-gray-200')}>{p.role}</span>
                     </div>
                ))}
                 {pointsGained > 0 && (
                    <div className="mt-6 pt-4 border-t border-gray-600 text-center">
                        <h3 className="text-xl font-bold text-yellow-400 mb-2">Votre Score</h3>
                        <p className="text-2xl text-white">
                            {initialScore} + <span className="text-green-400 font-bold">{pointsGained}</span> = {initialScore + pointsGained}
                        </p>
                    </div>
                )}
            </div>
            <div className="flex justify-center space-x-4 mt-8">
                {isHost && <button onClick={onPlayAgain} className="px-8 py-3 text-lg font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition">Rejouer</button>}
                <button onClick={onLeave} className="px-8 py-3 text-lg font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">Quitter</button>
            </div>
        </div>
    );
}


// --- OFFLINE MODE COMPONENTS ---
function OfflineSetup({ setScreen, setLocalGameData }) {
    const [players, setPlayers] = useState([{ name: '' }, { name: '' }, { name: '' }]);
    const [error, setError] = useState('');

    const updatePlayerName = (index, name) => {
        const newPlayers = [...players];
        newPlayers[index].name = name;
        setPlayers(newPlayers);
    };

    const addPlayer = () => { if (players.length < 10) setPlayers([...players, { name: '' }]); };
    const removePlayer = (index) => { if (players.length > 3) setPlayers(players.filter((_, i) => i !== index)); };

    const startGame = () => {
        if (players.some(p => p.name.trim() === '')) { setError('Tous les joueurs doivent avoir un nom.'); return; }
        setError('');
        const finalPlayers = players.map((player, index) => ({ ...player, id: index, score: 0 }));
        setLocalGameData({ players: finalPlayers });
        setScreen('offlineGame');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
             <div className="absolute top-4 left-4">
                 <button onClick={() => setScreen('welcome')} className="px-4 py-2 text-sm font-semibold bg-gray-600 rounded-lg hover:bg-gray-700 transition">Retour</button>
            </div>
            <div className="w-full max-w-lg p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-indigo-400">Configuration Hors Ligne</h1>
                <p className="text-center text-gray-400">Entrez le nom des joueurs (3-10).</p>
                <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                    {players.map((player, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <span className="text-gray-400 font-semibold">{index + 1}.</span>
                            <input type="text" placeholder={`Nom du Joueur ${index + 1}`} value={player.name} onChange={(e) => updatePlayerName(index, e.target.value)} className="flex-grow p-3 text-white bg-gray-700 rounded-lg border border-gray-600 focus:border-indigo-500 outline-none transition"/>
                            <button onClick={() => removePlayer(index)} disabled={players.length <= 3} className="p-2 text-red-400 hover:text-red-300 disabled:text-gray-600 disabled:cursor-not-allowed"><TrashIcon className="h-6 w-6" /></button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <button onClick={addPlayer} disabled={players.length >= 10} className="flex items-center space-x-2 px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:bg-gray-500 transition"><UserPlusIcon className="h-5 w-5" /><span>Ajouter</span></button>
                    <button onClick={startGame} className="px-8 py-3 text-lg font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition">Commencer</button>
                </div>
                {error && <p className="text-red-400 text-center">{error}</p>}
            </div>
        </div>
    );
}

function OfflineGame({ localGameData, setScreen }) {
    const [players, setPlayers] = useState([]);
    const [gameState, setGameState] = useState('setup');
    const [revealIndex, setRevealIndex] = useState(0);
    const [wordVisible, setWordVisible] = useState(false);
    const [winner, setWinner] = useState(null);
    const [pointsAwarded, setPointsAwarded] = useState([]);
    const [civilianWord, setCivilianWord] = useState('');
    const [mrWhiteGuess, setMrWhiteGuess] = useState('');

    useEffect(() => {
        startNewRound(localGameData.players);
    }, []);

    const startNewRound = (currentPlayers) => {
        const chosenWordPair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
        setCivilianWord(chosenWordPair.civilian);
        let tempPlayers = [...currentPlayers];
        for (let i = tempPlayers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tempPlayers[i], tempPlayers[j]] = [tempPlayers[j], tempPlayers[i]];
        }
        
        const hasMrWhite = tempPlayers.length >= 5;
        let playerIndex = 0;
        let assignedRoles = [];
        if(hasMrWhite) assignedRoles.push('Mr. White');
        assignedRoles.push('Undercover');
        while(assignedRoles.length < tempPlayers.length) assignedRoles.push('Civilian');

        const reinitializedPlayers = tempPlayers.map((player, index) => {
            const role = assignedRoles[index];
            let word = '';
            if (role === 'Civilian') word = chosenWordPair.civilian;
            if (role === 'Undercover') word = chosenWordPair.undercover;
            return { ...player, role: role, word: word, isEliminated: false };
        });

        setPlayers(reinitializedPlayers);
        setWinner(null);
        setPointsAwarded([]);
        setRevealIndex(0);
        setGameState('reveal');
    };
    
    const handleReveal = () => setWordVisible(true);
    const handleNext = () => {
        setWordVisible(false);
        if (revealIndex < players.length - 1) {
            setRevealIndex(revealIndex + 1);
        } else {
            setGameState('playing');
        }
    };
    
    const eliminatePlayer = (id) => {
        let newPlayers = players.map(p => p.id === id ? {...p, isEliminated: true} : p);
        setPlayers(newPlayers);
        checkWinCondition(newPlayers);
    };

    const checkWinCondition = (currentPlayers) => {
        const activePlayers = currentPlayers.filter(p => !p.isEliminated);
        const activeUndercovers = activePlayers.filter(p => p.role === 'Undercover');
        const activeMrWhite = activePlayers.find(p => p.role === 'Mr. White');
        let gameWinner = null;
        
        if (activePlayers.length <= 2 && activeUndercovers.length > 0) {
            gameWinner = 'Undercovers';
        } else if (activeUndercovers.length === 0) {
            if (activeMrWhite) {
                setGameState('mrWhiteGuess');
                return;
            } else {
                gameWinner = 'Civilians';
            }
        }
        
        if (gameWinner) {
            setWinner(gameWinner);
            awardPoints(gameWinner, currentPlayers);
            setGameState('finished');
        }
    };

    const handleMrWhiteFinalGuess = () => {
        let gameWinner = (mrWhiteGuess.trim().toLowerCase() === civilianWord.toLowerCase()) ? 'Mr. White' : 'Civilians';
        setWinner(gameWinner);
        awardPoints(gameWinner, players);
        setGameState('finished');
    };

    const awardPoints = (winner, finalPlayers) => {
        let updatedPlayers = [...finalPlayers];
        let awarded = [];
        let points = 0;
        let winningRole = '';

        if (winner === 'Undercovers') { points = 10; winningRole = 'Undercover'; } 
        else if (winner === 'Civilians') { points = 2; winningRole = 'Civilian'; } 
        else if (winner === 'Mr. White') { points = 8; winningRole = 'Mr. White'; }
        
        updatedPlayers = updatedPlayers.map(p => {
             if (p.role === winningRole || (winner === 'Undercovers' && p.role === 'Mr. White')) {
                 awarded.push({name: p.name, points: points});
                 return {...p, score: p.score + points};
             }
             return p;
        });

        setPlayers(updatedPlayers);
        setPointsAwarded(awarded);
    };
    
    if (gameState === 'reveal') {
        const currentPlayer = players[revealIndex];
        if (!currentPlayer) return null;
        return (
            <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-900 p-4">
                {!wordVisible ? (
                    <>
                        <h2 className="text-4xl font-bold text-white mb-4">Passez le téléphone à</h2>
                        <p className="text-6xl font-extrabold text-indigo-400 mb-8">{currentPlayer.name}</p>
                        <button onClick={handleReveal} className="px-10 py-4 text-2xl font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition transform hover:scale-105">Voir mon rôle</button>
                    </>
                ) : (
                    <>
                        <p className="text-lg text-gray-300">Votre rôle est :</p>
                        <p className={`text-3xl font-bold mb-6 ${currentPlayer.role === 'Civilian' ? 'text-blue-400' : (currentPlayer.role === 'Undercover' ? 'text-red-400' : 'text-gray-200')}`}>{currentPlayer.role}</p>
                        {currentPlayer.role !== 'Mr. White' && <>
                            <p className="text-lg text-gray-300">Votre mot est :</p>
                            <p className="text-5xl font-bold text-white tracking-widest uppercase mb-10">{currentPlayer.word}</p>
                        </>}
                        {currentPlayer.role === 'Mr. White' && <p className="text-xl text-gray-300 mb-10">Vous n'avez pas de mot. Restez discret et essayez de deviner le mot des Civils !</p>}
                        <button onClick={handleNext} className="px-10 py-4 text-2xl font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">{revealIndex < players.length - 1 ? 'Cacher et passer' : 'Commencer à jouer'}</button>
                    </>
                )}
            </div>
        );
    }
    
    if (gameState === 'playing') {
        return (
            <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-center text-indigo-400 mb-6">Que la discussion commence !</h1>
                    <p className="text-center text-gray-400 mb-8">Discutez et votez pour éliminer un joueur.</p>
                    <div className="space-y-3">
                        {players.map(p => (
                            <div key={p.id} className={`p-4 rounded-lg flex justify-between items-center transition ${p.isEliminated ? 'bg-red-900 opacity-50' : 'bg-gray-800'}`}>
                                <div>
                                    <p className={`text-xl font-semibold ${p.isEliminated ? 'line-through' : ''}`}>{p.name}</p>
                                    {p.isEliminated && <p className="text-sm text-red-300">{p.role} - "{p.word}"</p>}
                                </div>
                                {!p.isEliminated && <button onClick={() => eliminatePlayer(p.id)} className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition">Éliminer</button>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (gameState === 'mrWhiteGuess') {
        const mrWhitePlayer = players.find(p => p.role === 'Mr. White');
        return (
            <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-900 p-4">
                <h2 className="text-3xl font-bold text-yellow-400 mb-4">Tour de Mr. White !</h2>
                <p className="text-lg mb-4">Passez le téléphone à <span className="font-bold">{mrWhitePlayer.name}</span>.</p>
                <p className="text-lg mb-6">Vous devez deviner le mot des Civils pour gagner.</p>
                <input 
                    type="text"
                    value={mrWhiteGuess}
                    onChange={(e) => setMrWhiteGuess(e.target.value)}
                    className="w-full max-w-sm p-3 text-center text-white bg-gray-700 rounded-lg border border-gray-600 focus:border-yellow-500 outline-none transition"
                    placeholder="Entrez votre proposition"
                />
                <button onClick={handleMrWhiteFinalGuess} className="mt-4 px-8 py-3 text-lg font-bold text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 transition">Valider</button>
            </div>
        );
    }

    if (gameState === 'finished') {
        return (
            <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-900 p-4">
                <h2 className="text-5xl font-bold text-yellow-400 mb-4">Partie Terminée !</h2>
                <p className="text-3xl text-white mb-6">Les <span className="font-bold">{winner}</span> ont gagné !</p>
                <div className="w-full max-w-md bg-gray-800 p-4 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-3">Points de la manche</h3>
                    {pointsAwarded.map((p, i) => (<p key={i} className="text-lg">{p.name} <span className="font-bold text-green-400">+{p.points} points</span></p>))}
                </div>
                <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Scores Totaux</h3>
                    {players.sort((a,b) => b.score - a.score).map(p => (<div key={p.id} className="flex justify-between items-center p-2 text-lg"><span className="font-semibold">{p.name}</span><span className="font-bold text-yellow-400">{p.score}</span></div>))}
                </div>
                <div className="flex space-x-4 mt-8">
                    <button onClick={() => startNewRound(players)} className="px-8 py-3 text-lg font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition">Rejouer</button>
                    <button onClick={() => setScreen('welcome')} className="px-8 py-3 text-lg font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">Menu Principal</button>
                </div>
            </div>
        );
    }

    return null;
}
