"use client";
import { HUDState } from "@/types/hudstate";
import { signOut, fetchUserAttributes, fetchAuthSession, getCurrentUser, AuthSession } from "aws-amplify/auth";
import Link from "next/link";
import React, { useState, useEffect, useCallback, useContext, useRef } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import AppContext from "@/context/appcontext";
import OfferContext from "@/context/offerContext";
import tunnel from 'tunnel-rat';
import { Box } from "@chakra-ui/react";
import { LoginMainModal } from "@/components/modalv2/LoginMainModal";
import OfferModal from "@/components/modalv2/OfferModal";
import OrderComplete from "@/components/modalv2/OrderComplete";
import PaymentInput from "@/components/modalv2/PaymentInput";
import Checkout from "@/components/modalv2/Checkout"
import PurchaseSubPage from "@/components/modalv2/PurchaseSubPage";
import { authSignin, SigninResponse } from "@/auth/authsignin";
import { SiginBody } from "@/auth/signinbody";
import { getPurchase } from "@/api/getPurchase";
import { ContactModal } from "@/components/modalv2/ContactModal";
import { TutorialModal } from "@/components/modalv2/TutorialModal";
import { getUserPofile } from "@/api/getProfile";
import { getClientContact } from "@/api/getClientContact";
import { useWindowDimensions } from "@/components/hooks/useWindowDimensions";
import { useOrientation } from "@/components/hooks/useOrientation";
import { getAppOffers } from "@/api/getoffers";
import { Offer } from "@/types/offer";
import { getActivity, ActivityRequest } from "@/api/getActivity";
import { getReward, RewardRequest } from "@/api/getreward";

const SELECTED_OFFER=process.env.NEXT_PUBLIC_SELECTED_OFFER
const rat = tunnel();
const WIDTH = 414
const HEIGHT = 736
const ORIENTATION = 'portrait'

const Hero = () => {
  const { height, width } = useWindowDimensions();
  const logout = async () => {
    await signOut();
  };
  const { appData, setAppData } = useContext(AppContext);
  const { offerData, setOfferData } = useContext(OfferContext);
  const { unityProvider, addEventListener, removeEventListener, sendMessage } =
    useUnityContext({
      loaderUrl: "Build/build.loader.js",
      dataUrl: "Build/build.data",
      frameworkUrl: "Build/build.framework.js",
      codeUrl: "Build/build.wasm",
    });
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);

  // Initialize device pixel ratio on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDevicePixelRatio(window.devicePixelRatio || 1);
    }
  }, []);
  const [hudDimensions, setHudDimensions] = useState({
    width: 414,
    height: 736,
  });
  const unityDimensions = { width: 396, height: 694 };
  const [hudState, setHudState] = useState<Symbol>(HUDState.NONE);
  const [user, setUser] = useState<object|null>(null);
  // auth session retreived on init
  const [authSession, setAuthSession] = useState<AuthSession|null>(null);
  const [authSigninResponse, setAuthSigninResponse] = useState<SigninResponse|null>(null);
  const [stateVal, setStateVal] = useState<string>("");
  const [affiliateId, setAffiliateId] = useState<string>("");
  const purchaseRef = useRef<NodeJS.Timeout>();
  const rewardRef = useRef<NodeJS.Timeout>();
  const activityRef = useRef<NodeJS.Timeout>();

  const [selectedOffer, setSelectedOffer] = useState<Offer|null>(null);
  // const [offers, setOffers] = useState<Offer[]>([]);

  /**
   * 
   * @param {string} closeType - Options ["SURVEYCLOSE","OFFERCLOSE","CONTACTCLOSE","REWARDCLOSE"]
   */
  const handleClosePanel = (closeType:string) => {
    sendMessage("PWAInputController", "PanelEvent", closeType);
  }

  const handleGameInit = () => {
    sendMessage("PWAInputController", "GameInit");
  }

  const handlePurchase = useCallback(() => {

    let obj = {
      // @ts-ignore
      "purchase": [...appData.purchase]
    }

    const purchaseObj = JSON.stringify(obj)

    setAppData({
      ...appData, purchase: null
    })

    sendMessage("PWAInputController", "Purchase", purchaseObj)
    
  }, [appData, sendMessage]);

  const openModal = (modalId:string) => {
    const element = document.getElementById(modalId)
    if (element) {
      element.classList.add("show");
      element.style.display = "block";
    }
  }

  const closeModal = (modalId:string) => {
    const element = document.getElementById(modalId)
    if (element) {
      element.classList.remove("show");
      element.style.display = "";
    }
  }

  const signinAuth = useCallback(async (session:AuthSession, affiliateid:string="", isRetry:boolean = false) => {

    let email = ""
    let id = ""
    try {
      email = session.tokens?.signInDetails?.loginId!
    } catch (error) {
      email = ""
    }

    try {
      id = session.tokens?.idToken?.payload.sub!
    } catch (error) {
      id = ""
    }

    if (!email) {
      if (user !== null) {
        // @ts-ignore
        email = user.email
      }
    }

    if (!id) {
      if (user !== null) {
        // @ts-ignore
        id = user.id
      }
    }

    if (!id || !email) {
      // There was no session found
      console.log('Signin failed - user not found (missing id or email)');
      return
    }

    const request:SiginBody = {
      app_id: appData.app_id,
      email: email,
      affiliate_id: affiliateid
    };
    
    try {
      const response = await authSignin(request)
      if (response) {
        console.log("Auth signin API call successful");
        setAuthSigninResponse(response);
        // // Reset attempts on successful signin
        // setAuthAttempts(0);
      } else {
        console.log("Auth signin API call returned no response");
      }
    } catch (error) {
      console.error("Auth signin failed:", error);
    }
  }, [setAuthSigninResponse, appData, user]);

  const getAffiliate = () => {
    let aff = ""
    if (typeof window !== "undefined") {
      // Get data from localStorage
      const storedData = localStorage.getItem(appData.app_id + "data");
      
      if (storedData) {
        const { affiliate_id } = JSON.parse(storedData);
        setAppData({ ...appData, affiliate_id });
        setAffiliateId(affiliate_id)
        aff = affiliate_id;
      }
    }
    return aff;
  }

  const loginMain = useCallback((func:Function, affiliate:string="") => {
    
    if (authSession) {
        // handleGameInit()
        if (authSession.tokens) {
          func()
          signinAuth(authSession, affiliate)
          return;
        }
    }
      
    openModal('loginMainModal')
  }, [authSession]);

  const atemptLogin = useCallback((func:Function, affiliate:string="") => {
    
    if (authSession) {
        // handleGameInit()
        if (authSession.tokens) {
          func()
          signinAuth(authSession, affiliate)
          return;
        }
      }
  }, [authSession]);

  const offerMain = () => {
    openModal('offerModal')
  }

  useEffect(() => {
    if (stateVal.length == 0) return;
    if (stateVal !== "LOGINMAIN") return;

    const affiliate = getAffiliate()

    // Login at the start of game
    loginMain(handleGameInit, affiliate)

    setStateVal("");
  }, [stateVal.length]);

  useEffect(() => {
    if (stateVal.length == 0) return;
    if (stateVal !== "OFFER") return;
    if (appData.offers.length == 0) return;

    offerMain()

    setStateVal("");
  }, [stateVal.length]);

  useEffect(() => {
    if (stateVal.length == 0) return;
    if (stateVal !== "ATTEMPTLOGIN") return;

    const affiliate = getAffiliate()

    // Login at the start of game
    atemptLogin(handleGameInit, affiliate)

    setStateVal("");
  }, [stateVal.length]);

  useEffect(() => {
    if (stateVal.length == 0) return;
    if (stateVal !== "CONTACT") return;

    openModal('contactModal')

    setStateVal("");
  }, [stateVal.length]);

  const showOffer = useCallback(() => {
    if (appData.loginData) {
          
        if (!appData.contact) {
          setStateVal("CONTACT");
          return;
        }
    }
        
    if (appData.offers.length == 0) return;
    setStateVal("OFFER");
  }, [appData.loginData, appData.contact, setStateVal, appData.offers]);

  const getClientProfile = useCallback(async () => {
    const response = await getClientContact(appData.loginData?.tokenid!, appData.user_id)
    if (response) {

      if (typeof response.body.data !== "string") {
        setAppData({ ...appData, contact: { email: response.body.data.email, verified: false }})
      }
    }
  }, [appData.loginData, getClientContact, setAppData]);

  const changeHUDState = (state: string) => {
    switch (state) {
      case "LOGINMAIN":
        
        setStateVal(state);
        break;

      case "ATTEMPTLOGIN":
        
        setStateVal(state);
        break;

      case "CONTACT":
        
        setStateVal(state);
        break;

      case "OFFER":
        
        setHudState(HUDState.OFFER);
        break;

      case "NORESOURCE":
        
        setHudState(HUDState.NORESOURCE);
        break;

      case "POSTLOGIN":
        
        setHudState(HUDState.POSTLOGIN);
        break;

      case "TUTORIAL":
        
        setHudState(HUDState.TUTORIAL);
        break;

      case "REFRESH":
        
        setHudState(HUDState.REFRESH);
        break;

      default:
        console.log(`could not identify state ${state}`);
        break;
    }
  };

  // const handleChangeHUDUI = useCallback((state: string) => {
  //   changeHUDState(state);
  // }, []);

  const handleChangeHUDUI = (state: string) => {
    changeHUDState(state);
  }

  const sendLoginMessage = useCallback(
    () => {
      let object = {
        user_id: appData.user_id,
        idToken: appData.loginData?.tokenid,
        refreshToken: appData.loginData?.refreshtoken,
        app_id: appData.app_id
      }
  
      let loginObj = JSON.stringify(object);
  
      sendMessage("PWAInputController", "LoginV2", loginObj);
    },
    [appData],
  );

  const sendLoginMessagev2 = useCallback(async () => {
    const tokens = (await fetchAuthSession()).tokens!
    
    const idToken = tokens.idToken!.toString()
    let object = {
      user_id: appData.user_id,
      idToken: idToken,
      refreshToken: '',
      app_id: appData.app_id
    }

    let loginObj = JSON.stringify(object);

    sendMessage("PWAInputController", "LoginV2", loginObj);
  },[appData]);

  const sendRefreshMessage = useCallback(async () => {
    try {
      const tokens = (await fetchAuthSession({ forceRefresh: true })).tokens!
      
      const idToken = tokens.idToken!.toString()
      let object = {
        user_id: appData.user_id,
        idToken: idToken,
        refreshToken: '',
        app_id: appData.app_id
      }

      let loginObj = JSON.stringify(object);

      sendMessage("PWAInputController", "RefreshV2", loginObj);
    } catch (error) {
      sendMessage("PWAInputController", "RefreshV2", JSON.stringify({error: "No session found"}));
    }
  },[appData]);

  /** updates the HUD */
  useEffect(() => {
    //@ts-ignore
    addEventListener("ChangeHUDUI", handleChangeHUDUI);
    return () => {
      //@ts-ignore
      removeEventListener("ChangeHUDUI", handleChangeHUDUI);
    };
  }, [addEventListener, removeEventListener, handleChangeHUDUI]);

  /** send login tokens to game */
  // useEffect(() => {
  //   if (appData.loginData == null) return;
  //   console.log("Sending login message");
  //   sendLoginMessage();
  // }, [appData.loginData])

  /** initiates game */
  // useEffect(() => {
  //   if (appData.loginData == null) return;
  //   handleGameInit();
  // }, [appData.loginData])

  /** send purcahse to game */
  useEffect(() => {
    if (appData.purchase == null) return;
    console.log("purchase", appData.purchase);
  }, [appData.purchase]);

  useEffect(() => {
    if (hudState !== HUDState.REFRESH) return;
    sendRefreshMessage();
    setHudState(HUDState.NONE);
  }, [hudState]);

  useEffect(() => {
    if (hudState !== HUDState.LOGINMAIN) return;
    const element = document.getElementById('loginMainModal')
    if (element) {
      element.classList.add("show");
      element.style.display = "block";
    }
    setHudState(HUDState.NONE);
  }, [hudState]);

  useEffect(() => {
    if (hudState !== HUDState.OFFER) return;
    
    // updated to prevent offer showing before login
    if (!authSession) return;
    if (!authSession.tokens) return;
    showOffer();

    setHudState(HUDState.NONE);
  }, [hudState]);

  const noResourceResponse = useCallback(() => {
    if (!appData.loginData) {
      setStateVal("LOGINMAIN");
      return;
    }
    if (appData.loginData) {
          
      if (!appData.contact) {
        setStateVal("CONTACT");
        return;
      }
    }
        
    setStateVal("OFFER");
  }, [appData.loginData, appData.contact, setStateVal]);

  useEffect(() => {
    if (hudState !== HUDState.NORESOURCE) return;
    
    noResourceResponse();

    setHudState(HUDState.NONE);
  }, [hudState]);

  useEffect(() => {
    if (appData.loginData == null) return;
    handleGameInit()
  }, [appData.loginData]);

  // installation listener
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleBeforeInstallPrompt = (event:any) => {
        event.preventDefault();
        // setPrompt(event);

        if (!window.matchMedia("(display-mode: standalone)").matches) {
          // setShowModal(true);
        }
      };
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      return () => {
        window.removeEventListener(
          "beforeinstallprompt",
          handleBeforeInstallPrompt
        );
      };
    }
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await getCurrentUser()
        const { signInDetails, userId } = response;
        // return response;
        setUser({
          "email": signInDetails?.loginId,
          "id": userId
        })
      } catch (error) {
        
      }
    }
    getUser()
  }, []);

  useEffect(() => {
    if (user == null) return;
    // console.log(user);
  }, [user]);

  useEffect(() => {
    const getAuthSession = async () => {
      const response = await fetchAuthSession({ forceRefresh: true })
      if (response == null) return;
      setAuthSession(response)
    }
    try {
      getAuthSession()
    } catch (error) {
      
    }
  }, []);

  // Facebook Pixel pageview tracking
  // useEffect(() => {
  //   try {
  //     if (process.env.NEXT_PUBLIC_FB_PIXEL) {
  //       ReactPixel.pageView();
  //     } else {
  //       console.warn('Facebook Pixel ID not found in environment variables');
  //     }
  //   } catch (error) {
  //     console.error('Facebook Pixel tracking error:', error);
  //   }
  // }, []);

  useEffect(() => {
    if (authSession == null) return;
    // console.log(`authSession`)
    // console.log(authSession)
  }, [authSession]);

  useEffect(() => {
    if (authSigninResponse == null) return;
    const time = new Date();
    // console.log("authSigninResponse")
    // console.log(authSigninResponse)
    setAppData({ ...appData, user_id: authSigninResponse.body.data.user_id, session: {
      session_id: authSigninResponse.body.data.session_id,
      time: time.getTime()/1000 + 60*60,
      status: "VERIFIED",
      update: "s" + (appData.session.update ?? "")
    }});
    
    // Poll getActivity if user is new
    if (authSigninResponse.body.data.isNew) {
      let pollCount = 0;
      const maxPolls = 6; // 5 seconds
      
      const pollActivity = async () => {
        try {
          const rewardRequest: RewardRequest = {
            app_id: appData.app_id
          };
          
          const response = await getReward(rewardRequest);
          if (response) {
            if (response.body.error) return;
            if (response.body.success) {
              // console.log("Reward poll response:", response.body.data);
              // Handle successful reward response here if needed
              // You can add logic to process the reward data

              const purchaseObj = {
                purchase: response.body.data
              }
      
              const purchaseStr = JSON.stringify(purchaseObj)
      
              sendMessage("PWAInputController", "Purchase", purchaseStr);
            }
          }
          
          pollCount++;
          if (pollCount >= maxPolls) {
            clearInterval(activityRef.current);
            console.log("Reward polling completed after 5 seconds");
          }
        } catch (error) {
          console.error("Error polling reward:", error);
        }
      };

      // Start polling immediately, then every second
      pollActivity();
      activityRef.current = setInterval(pollActivity, 1000);
      
      // Cleanup after 5 seconds
      setTimeout(() => {
        if (activityRef.current) {
          clearInterval(activityRef.current);
        }
      }, 5000);
    }
    // Keep loading state active as we start polling for login data
  }, [authSigninResponse]);

  useEffect(() => {
    if (authSigninResponse == null) return;
    sendLoginMessagev2();
  },[authSigninResponse]);

  const getOffers = useCallback(async () => {
    const response = await getAppOffers(appData.app_id);
    if (response) {
      const oto_offers = response.body.data.filter((offer:Offer) => offer.tags.includes("OTO"));
      const selected_offer = oto_offers[Math.floor(Math.random() * oto_offers.length)];
      setSelectedOffer(selected_offer);
      setAppData({ ...appData, offers: response.body.data });
    }
  }, [appData.app_id, appData, offerData, setAppData, setOfferData]);

  useEffect(() => {
    if (authSigninResponse == null) return;
    getOffers();
  }, [authSigninResponse]);

  // Cleanup activity polling on unmount
  useEffect(() => {
    return () => {
      if (activityRef.current) {
        clearInterval(activityRef.current);
      }
    };
  }, []);

  const mainAuth = useCallback(async (affiliate_id:string="") => {
    const response = await fetchAuthSession({ forceRefresh: true })

    const authResponse = await signinAuth(response, affiliate_id);
  },[]);

  // login from main flow
  useEffect(() => {
    if (appData.app_id == null) return;
    if (authSession != null) return;
    if (appData.user_id.length > 0) return;
    const affiliate_id = getAffiliate();

    mainAuth(affiliate_id);
  }, [appData.session.update]);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     // Get data from localStorage
  //     const storedData = localStorage.getItem(appData.app_id + "data");
  //     if (storedData) {
  //       const { affiliate_id } = JSON.parse(storedData);
  //       setAppData({ ...appData, affiliate_id });
  //     }
  //   }
  // }, []);

  useEffect(() => {
    if (offerData.selectedOffer == null) return;

    closeModal('offerModal')

    openModal('checkoutModalgame')
  }, [offerData.selectedOffer]);

  useEffect(() => {
    if (!offerData.completedPurchase) return;
    closeModal('checkoutModalgame')

    openModal('completedModal')
  }, [offerData.completedPurchase]);

  // purchase
  useEffect(() => {
    // if (appData.transactionid.length == 0) return;
    if (offerData.completedPurchase == null) return;

    let pollCount = 0;
    const maxPolls = 5; // Limit to 5 calls

    const fetchPurchase = async () => {
      try {
        pollCount++;

        if (pollCount >= maxPolls) {
          clearInterval(purchaseRef.current);
          console.log("Purchase polling completed after 5 attempts");
        }
        
        const rewardRequest: RewardRequest = {
          app_id: appData.app_id
        };
        
        const response = await getReward(rewardRequest);
        
        if (!response) {
          return;
        }
        
        if (response.body.error) {
          return;
        }
        
        if (!response.body.success) {
          return;
        }
        
        // Success case - stop polling and process purchase
        clearInterval(purchaseRef.current);
        // console.log("Reward poll response:", response.body.data);
        // Handle successful reward response here if needed
        // You can add logic to process the reward data

        const purchaseObj = {
          purchase: response.body.data
        }

        const purchaseStr = JSON.stringify(purchaseObj)

        sendMessage("PWAInputController", "PurchaseV2", purchaseStr);
        
        } catch (error) {
          console.error("Error fetching data:", error);
          if (pollCount >= maxPolls) {
            clearInterval(purchaseRef.current);
            console.log("Purchase polling completed after 5 attempts - error occurred");
          }
      }
    };

    purchaseRef.current = setInterval(fetchPurchase, 1000); // Fetch every 1 second

    return () => clearInterval(purchaseRef.current); // Cleanup on unmount
  // }, [appData.transactionid.length]);
  }, [offerData.completedPurchase]);

  // email - reward
  useEffect(() => {
    if (appData.contact == null) return;

    const fetchReward = async () => {
      try {
        const response = await getPurchase(appData.user_id); // Replace with your actual API endpoint
        if (!response) return;
        if (response.body.error) return;
        if (!response.body.error && !response.body.success) return;

        //@ts-ignore
        setAppData({ ...appData, reward: response.body.data });

        const purchaseObj = {
          purchase: response.body.data
        }

        const purchaseStr = JSON.stringify(purchaseObj)

        sendMessage("PWAInputController", "PurchaseV2", purchaseStr);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    rewardRef.current = setInterval(fetchReward, 1000); // Fetch every 1 second

    return () => clearInterval(rewardRef.current); // Cleanup on unmount
  }, [appData.contact]);

  // email - reward
  useEffect(() => {
    if (appData.reward == null) return;
    clearInterval(rewardRef.current);
    setAppData({...appData, reward: null})
  }, [appData.reward]);

  useEffect(() => {
    if (!appData.purchase) return;
    setAppData({ ...appData, tranactionid: "", purchase: null });
    clearInterval(purchaseRef.current);
  }, [appData.purchase]);

  const closeOffer = () => {
    sendMessage("PWAInputController", "PanelEvent", "OFFERCLOSE");
  }

  useEffect(() => {
    if (hudState !== HUDState.POSTLOGIN) return;

    // getClientProfile()

    // setHudState(HUDState.NONE);
  }, [hudState]);

  useEffect(() => {
    if (hudState !== HUDState.TUTORIAL) return;
    
    // Check if tutorial has been shown before
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem(appData.app_id + "data");
      let hasShownTutorial = false;
      
      if (storedData) {
        try {
          const { tutorialShown } = JSON.parse(storedData);
          hasShownTutorial = tutorialShown === true;
        } catch (error) {
          console.error("Failed to parse localStorage data:", error);
        }
      }
      
      // Only show tutorial if it hasn't been shown before
      if (!hasShownTutorial) {
        const element = document.getElementById('tutorialModal');
        if (element) {
          element.classList.add("show");
          element.style.display = "block";
        }
        
        // Mark tutorial as shown in localStorage
        const existingData = storedData ? JSON.parse(storedData) : {};
        const updatedData = { ...existingData, tutorialShown: true };
        localStorage.setItem(appData.app_id + "data", JSON.stringify(updatedData));
      }
    }
    
    setHudState(HUDState.NONE);
  }, [hudState, appData.app_id]);

  /** respond to device pixel ratio change */
	useEffect(() => {
		if (typeof window !== "undefined") {
			// A function which will update the device pixel ratio of the Unity
			// Application to match the device pixel ratio of the browser.
			const updateDevicePixelRatio = function () {
			  setDevicePixelRatio(window.devicePixelRatio);
			};
			// A media matcher which watches for changes in the device pixel ratio.
			const mediaMatcher = window.matchMedia(
			  `screen and (resolution: ${devicePixelRatio}dppx)`
			);
			// Adding an event listener to the media matcher which will update the
			// device pixel ratio of the Unity Application when the device pixel
			// ratio changes.
			mediaMatcher.addEventListener("change", updateDevicePixelRatio);
			return function () {
			  // Removing the event listener when the component unmounts.
			  mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
			};
		}
	}, [devicePixelRatio]);

  const gameDimensions = (orientation:string) => {
		let _width = 0;
		let _height = 0;
		let ratio = 0
		if (orientation == 'landscape') {

		}

		if (orientation == 'portrait') {
			ratio = HEIGHT/WIDTH

			if (width * ratio > height) {
				_width = Math.round(height/ratio)
				_height = Math.round(_width*ratio)
			}
			else if (height/ratio > width) {
				_height = Math.round(width*ratio)
				_width = Math.round(_height/ratio)
			}
			else {
				_width = WIDTH
				_height = HEIGHT
			}
		}

		unityDimensions.height = _height
		unityDimensions.width = _width
	}

	gameDimensions(ORIENTATION)



  return (
    <>
    <rat.Out/>
    <rat.In>
      <Box
          className="modal fade"
          id="contactModal"
          data-bs-backdrop="static"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          overflow={"hidden"}
      >
          <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
              <ContactModal />
          </div>
          </div>
      </Box>
      <Box
          className="modal fade"
          id="loginMainModal"
          data-bs-backdrop="static"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          overflow={"hidden"}
      >
          <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
              <LoginMainModal />
          </div>
          </div>
      </Box>
      <Box
          className="modal fade"
          id="offerModal"
          data-bs-backdrop="static"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          overflow={"hidden"}
      >
          <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
              <OfferModal offer_id={selectedOffer?.id ?? SELECTED_OFFER!} />
          </div>
          </div>
      </Box>

      <Box
          className="modal fade"
          id="completedModal"
          data-bs-backdrop="static"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          overflow={"hidden"}
      >
          <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
              <OrderComplete func={closeOffer} />
          </div>
          </div>
      </Box>

      <Box
          className="modal fade"
          id="checkoutModalgame"
          data-bs-backdrop="static"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          overflow={"hidden"}
      >
          <div className="modal-dialog modal-fullscreen">
          <div
              style={{
              background: "blue",
              }}
              className="modal-content"
          >
              <PaymentInput />
              <Checkout />
              <PurchaseSubPage />
          </div>
          </div>
      </Box>

      <Box
          className="modal fade"
          id="tutorialModal"
          data-bs-backdrop="static"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          overflow={"hidden"}
      >
          <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
              <TutorialModal />
          </div>
          </div>
      </Box>
    </rat.In>
      <div className="internet-connection-status" id="internetStatus"></div>
      {/* <div className="hero-block-wrapper bg-primary"> */}
        <div className="hero-block-wrapper" style={{
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        {/* <div className="hero-block-styles">
          <div
            className="hb-styles1"
            style={{ backgroundImage: `url(/assets/img/core-img/dot.png)` }}
          ></div>
          <div className="hb-styles2"></div>
          <div className="hb-styles3"></div>
        </div> */}
        {/* <div style={{
          height: '24px'
        }}/> */}
        <div>
        <Unity
          unityProvider={unityProvider}
          style={{
            width: unityDimensions.width,
            height: unityDimensions.height,
          }}
          devicePixelRatio={devicePixelRatio}
          id="my-canvas-id"
          tabIndex={1}
        />
        </div>
      </div>
    </>
  );
};

export default Hero;
