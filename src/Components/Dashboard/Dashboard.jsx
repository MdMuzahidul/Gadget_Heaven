import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Wishlists from "../Wishlist/Wishlists";
import Cards from "../Card/Cards";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Tabs>
        <div className="bg-[rgba(149,56,226,1)] text-center">
          <div className="w-11/12 mx-auto  py-8">
            <h3 className="text-white text-3xl font-bold mb-4">Dashboard</h3>
            <p className="text-white max-w-[796px] mx-auto mb-8">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <TabList className={`flex justify-center gap-8`}>
              <Tab
                className={`py-4 px-16 text-white font-extrabold rounded-[32px] border-2`}
              >
                Cart
              </Tab>
              <Tab
                className={`py-4 px-16 text-white font-extrabold rounded-[32px] border-2`}
              >
                Wishlist
              </Tab>
            </TabList>
          </div>
        </div>
        <div className="w-11/12 mx-auto">
          <TabPanel>
            <Cards></Cards>
          </TabPanel>
          <TabPanel>
            <Wishlists></Wishlists>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Dashboard;
