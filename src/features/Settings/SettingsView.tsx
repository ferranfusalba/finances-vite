import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Column from "@/components/Column/Column";

const Settings = () => {
  return (
    <div className="settings">
      {/* <SectionHeader title="Settings" /> */}
      <Column state="PLANNED"></Column>
      <Column state="ONGOING"></Column>
      <Column state="DONE"></Column>
    </div>
  );
};

export default Settings;
