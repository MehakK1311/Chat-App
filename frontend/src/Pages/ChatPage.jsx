import { ChatState } from "../context/chatProvider";
import { Box, Flex } from "@chakra-ui/react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box w="100%" h="91.5vh" p={10}>
        <Flex flexDirection={"row"} justifyContent={"space-between"}>
          {user && <MyChats />}
          {user && <ChatBox />}
        </Flex>
      </Box>
    </div>
  );
};

export default ChatPage;
