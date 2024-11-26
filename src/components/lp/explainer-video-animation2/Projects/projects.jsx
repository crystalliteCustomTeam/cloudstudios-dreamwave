"use client"
// React
import { useState, useEffect } from "react"
// Bootstrap
import { Container, Spinner } from "react-bootstrap"
// Css
import styles from "./projects.module.scss"
import VideoModal from "@/src/components/videomodal"
const tabs = [
  { title: "2D Animation", tag: "cloudstudios2D" },
  { title: "3D Animation", tag: "cloudstudios3D" },
  { title: "Whiteboard Animation", tag: "cloudstudiosWB" },
  { title: "Motion Graphics", tag: "cloudstudiosMG" },
  { title: "Hybrid Animation", tag: "cloudstudiosHB" },
]

const VIMEO_ACCESS_TOKEN = "efbf8d8cbada18a5bc7572594e303e5c"

const fetchVideos = async (tag) => {
  try {
    const response = await fetch(
      `https://api.vimeo.com/me/videos?query=${tag}&fields=pictures,uri,created_time,tags&per_page=6`,
      {
        headers: {
          Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
        },
      }
    )

    const data = await response.json()
    return data.data
  } catch (error) {
    console.error("Error fetching videos:", error)
    return []
  }
}
const Projects = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].tag)
  const [modalShow, setModalShow] = useState(false)
  const [videoID, setVideoID] = useState("")
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTabVideos = async () => {
      setLoading(true)
      const videoData = await fetchVideos(activeTab)
      setVideos(videoData)
      setLoading(false)
    }

    fetchTabVideos()
  }, [activeTab])

  const handleTabClick = (tab) => {
    setActiveTab(tab.tag)
  }

  const handlePlayClick = (id) => {
    setModalShow(true)
    setVideoID(id)
  }
  return (
    <section>
      <div className={styles.root}>
        <Container>
          <div className={styles.content}>
            <h2>Our Streamlined Projects</h2>
          </div>
          <div className={styles.tabTitle}>
            {tabs.map((tab) => (
              <div
                key={tab.tag}
                className={`${styles.tab} ${
                  activeTab === tab.tag ? styles.active : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.title}
              </div>
            ))}
          </div>
          <div className={styles.tabContent}>
            {loading ? (
              <div className="text-center">
                <Spinner animation="border" />
                <p>Loading...</p>
              </div>
            ) : (
              <div className={styles.tabVideo}>
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className={`${styles.videoThumbnail} ${
                      videoID === video.uri.split("/").pop()
                        ? styles.active
                        : ""
                    }`}
                    style={{
                      backgroundImage: `url(${video.pictures.sizes[3].link})`,
                    }}
                  >
                    <span className={styles.overlay}></span>
                    <div className={styles.thumbnail}>
                      <button className={styles.playButton} onClick={() => handlePlayClick(video.uri.split("/").pop())}>
                        <span>PLAY VIDEO</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
        <VideoModal
          show={modalShow}
          iframeUrl={videoID}
          onHide={() => setModalShow(false)}
        />
      </div>
    </section>
  )
}

export default Projects
