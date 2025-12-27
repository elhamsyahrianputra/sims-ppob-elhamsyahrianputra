import { usePageTitle } from "../../../core/hooks/use-page-title";
import BannerSlider from "../components/banner-slider";
import ServiceMenu from "../components/service-menu";

export default function HomePage() {
  usePageTitle({ title: "Beranda" });

  return (
    <>
      <ServiceMenu />
      <BannerSlider />
    </>
  );
}
