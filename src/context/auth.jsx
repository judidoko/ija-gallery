import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  // onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/config";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  return (
    <UserContext.Provider value={{ user, createUser, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};

// import { createContext, useState } from "react";

// // create context
// export const AuthContext = createContext({
//   user: null,
//   isLoading: true,
// });

// // create provider
// export const AuthProvider = ({ children }) => {
// const [user,  setUser] = useState(null);
// const [isLoading, setIsLoading] = useState(false)

//   return <AuthContext.Provider value={{user, isLoading }}>{children}</AuthContext.Provider>;
// };
