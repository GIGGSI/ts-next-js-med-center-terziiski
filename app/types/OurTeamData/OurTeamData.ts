type ourTeamData = {
  id: number;
  image: string;
  doctor: string;
  career: string;
  content: Array<{ id: number; text: string }>;
  sectionId?: string;
};
