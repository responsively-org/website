import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

const PlatformsDownload = ({ version, publishedTs }) => {
  const getIntelMacURL = () => {
    if (version === null) {
      return null;
    }
    const tagName = version;
    var versionName = tagName.substring(1);
    return `https://github.com/responsively-org/responsively-app-releases/releases/download/${tagName}/ResponsivelyApp-${versionName}.dmg`;
  };

  const getArmMacURL = () => {
    if (version === null) {
      return null;
    }
    const tagName = version;
    var versionName = tagName.substring(1);
    return `https://github.com/responsively-org/responsively-app-releases/releases/download/${tagName}/ResponsivelyApp-${versionName}-arm64.dmg`;
  };

  const getLinuxURL = () => {
    if (version === null) {
      return null;
    }
    const tagName = version;
    var versionName = tagName.substring(1);
    return `https://github.com/responsively-org/responsively-app-releases/releases/download/${tagName}/ResponsivelyApp-${versionName}.AppImage`;
  };

  const getWindowsURL = () => {
    if (version === null) {
      return null;
    }
    const tagName = version;
    var versionName = tagName.substring(1);
    return `https://github.com/responsively-org/responsively-app-releases/releases/download/${tagName}/ResponsivelyApp-Setup-${versionName}.exe`;
  };

  return (
    <div className="pt-4">
      <div className="position-relative">
        <div className="row text-center justify-content-center">
          <div className="col pb-2">
            <small className="d-flex justify-content-center">
              {publishedTs ? (
                <span className="">
                  {version} - Released {timeAgo.format(publishedTs)}.
                </span>
              ) : null}
            </small>
            <small>
              <a
                href="https://headwayapp.co/responsively-changelog"
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                &nbsp;What's New?{" "}
                <span role="img" aria-label="tada">
                  🎉
                </span>
              </a>
            </small>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <h2>Available for all major operating systems</h2>
          </div>
        </div>
        <div className="row text-center mb-4" id="manual">
          <div
            className="col-md-4 mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="bg-light rounded p-3">
              <div className="icon-round bg-primary mx-auto mb-4">
                <img
                  className="icon"
                  src="/assets/img/logos/brand/apple.svg"
                  alt="icon"
                />
              </div>
              <div className="d-flex flex-column">
                <span className="text-primary m-1 font-weight-bold">
                  {version}
                </span>
                {publishedTs?.getTime() > 1669841204000 ? (
                  <a
                    id="macOs"
                    className="m-1 btn btn-outline-primary mx-2"
                    href={
                      getArmMacURL() ||
                      "https://github.com/responsively-org/responsively-app-releases/releases"
                    }
                  >
                    <span className="m-1">Download for Apple Silicon</span>
                  </a>
                ) : null}
                <a
                  id="macOs"
                  className="m-1 btn btn-outline-primary mx-2"
                  href={
                    getIntelMacURL() ||
                    "https://github.com/responsively-org/responsively-app-releases/releases"
                  }
                >
                  <span className="m-1">Download for Intel Mac</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="bg-light rounded p-3">
              <div className="icon-round bg-primary mx-auto mb-4">
                <img
                  className="icon"
                  src="/assets/img/icons/custom/windows-icon.svg"
                  alt="icon"
                />
              </div>
              <div className="d-flex flex-column">
                <span className="text-primary m-1 font-weight-bold">
                  {version}
                </span>
                <a
                  id="windowsOs"
                  className="m-1 btn btn-outline-primary mx-2"
                  href={
                    getWindowsURL() ||
                    "https://github.com/responsively-org/responsively-app-releases/releases"
                  }
                >
                  <span className="m-1">Download for Windows</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="bg-light rounded p-3">
              <div className="icon-round bg-primary mx-auto mb-4">
                <img
                  className="icon"
                  src="/assets/img/icons/custom/linux-icon.svg"
                  alt="icon"
                />
              </div>
              <div className="d-flex flex-column">
                <span className="text-primary m-1 font-weight-bold">
                  {version}
                </span>
                <a
                  id="linuxOs"
                  className="m-1 btn btn-outline-primary mx-2"
                  href={
                    getLinuxURL() ||
                    "https://github.com/responsively-org/responsively-app-releases/releases"
                  }
                >
                  <span className="m-1">Download for Linux</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformsDownload;
