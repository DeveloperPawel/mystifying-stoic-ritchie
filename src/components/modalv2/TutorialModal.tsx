import { Box, Flex, Button, Text, VStack, HStack } from '@chakra-ui/react';
import React, { FC, useContext, useState } from 'react';
import AppContext from '@/context/appcontext';

interface TutorialModalProps {
    
}

interface TutorialStep {
  title: string;
  description: string;
  illustration: string;
}

// const tutorialSteps: TutorialStep[] = [
//   {
//     title: "Welcome to the Game!",
//     description: "Learn the basics of gameplay, controls, and objectives to get started on your adventure.",
//     illustration: "/assets/img/tutorial/first.gif"
//   },
//   {
//     title: "Navigate & Explore",
//     description: "Use touch controls to move around, interact with objects, and discover new areas in the game world.",
//     illustration: "/assets/img/bg-img/37.png"
//   },
//   {
//     title: "Collect & Progress",
//     description: "Gather resources, complete quests, and unlock new features as you advance through the game.",
//     illustration: "/assets/img/bg-img/37.png"
//   },
//   {
//     title: "Ready to Play!",
//     description: "You're all set! Start your adventure and have fun exploring everything the game has to offer.",
//     illustration: "/assets/img/bg-img/37.png"
//   }
// ];

const tutorialSteps: TutorialStep[] = [
  {
    title: "Welcome to the Game!",
    description: "Learn the basics of gameplay, controls, and objectives to get started on your adventure.",
    illustration: "/assets/img/tutorial/first.gif"
  },
];
 
export const TutorialModal: FC<TutorialModalProps> = () => {
    const { appData, setAppData } = useContext(AppContext);
    const [currentStep, setCurrentStep] = useState<number>(0);

    const closeButtonClick = () => {
      const element = document.getElementById('tutorialModal')
      if (element) {
        element.classList.remove("show");
        element.style.display = "";
      }
    }

    const nextStep = () => {
      if (currentStep < tutorialSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }

    const prevStep = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    }

    const skipTutorial = () => {
      closeButtonClick();
    }

    const completeTutorial = () => {
      closeButtonClick();
    }

    const currentTutorialStep = tutorialSteps[currentStep];
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === tutorialSteps.length - 1;

    return (
        <Box
          top={0}
          width={"100%"}
          height={"100%"}
          borderBottomLeftRadius={20}
          borderBottomRightRadius={20}
          zIndex={900}
          background={"white"}
        >
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100%"}
            padding={4}
          >
            {/* Header with close button */}
            <Flex
              width={"100%"}
              justifyContent={"space-between"}
              alignItems={"center"}
              position={"absolute"}
              top={4}
              left={0}
              right={0}
              paddingX={4}
            >
              <Text fontSize={"lg"} fontWeight={"bold"} color={"gray.600"}>
                Tutorial
              </Text>
              <Button
                className="btn-close"
                aria-label="Close"
                onClick={skipTutorial}
                variant={"ghost"}
                size={"sm"}
                background={"gray.200"}
                borderRadius={"full"}
                width={"32px"}
                height={"32px"}
                minWidth={"32px"}
              >
                ✕
              </Button>
            </Flex>

            {/* Main tutorial content */}
            <VStack gap={8} maxWidth={"400px"} textAlign={"center"}>
              {/* Step indicator */}
              <HStack gap={2}>
                {tutorialSteps.map((_, index) => (
                  <Box
                    key={index}
                    width={"8px"}
                    height={"8px"}
                    borderRadius={"full"}
                    background={index <= currentStep ? "blue.500" : "gray.300"}
                    transition={"all 0.3s ease"}
                  />
                ))}
              </HStack>

              {/* Illustration */}
              <Box>
                <img
                  src={currentTutorialStep.illustration}
                  alt={currentTutorialStep.title}
                  style={{
                    height: '200px',
                    width: '200px',
                    objectFit: 'contain'
                  }}
                />
              </Box>

              {/* Content */}
              <VStack gap={4}>
                <Text fontSize={"2xl"} fontWeight={"bold"} color={"gray.800"}>
                  {currentTutorialStep.title}
                </Text>
                <Text fontSize={"md"} color={"gray.600"} lineHeight={"1.6"}>
                  {currentTutorialStep.description}
                </Text>
              </VStack>

              {/* Navigation buttons */}
              <HStack gap={4} width={"100%"} justifyContent={"space-between"}>
                <Button
                  variant={"outline"}
                  colorScheme={"gray"}
                  onClick={prevStep}
                  disabled={isFirstStep}
                  visibility={isFirstStep ? "hidden" : "visible"}
                >
                  Back
                </Button>

                <Text fontSize={"sm"} color={"gray.500"}>
                  {currentStep + 1} of {tutorialSteps.length}
                </Text>

                {!isLastStep ? (
                  <Button
                    colorScheme={"blue"}
                    onClick={nextStep}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    colorScheme={"green"}
                    onClick={completeTutorial}
                  >
                    Get Started!
                  </Button>
                )}
              </HStack>

              {/* Skip button */}
              {!isLastStep && (
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  color={"gray.500"}
                  onClick={skipTutorial}
                >
                  Skip Tutorial
                </Button>
              )}
            </VStack>
          </Flex>
        </Box>
    );
}; 