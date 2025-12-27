import { Button } from "../../../core/components/ui";

type Props = {
  isEditing: boolean;
  onEdit: () => void;
  onLogout: () => void;
};

export default function ProfileActions({ isEditing, onEdit, onLogout }: Props) {
  if (isEditing) return null;

  return (
    <div className="mt-6 flex flex-col gap-4">
      <Button className="border border-primary bg-white text-primary hover:bg-white hover:opacity-75" onClick={onEdit}>
        Edit Profile
      </Button>
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
}
