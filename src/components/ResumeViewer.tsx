import { useEffect } from 'react'
import './ResumeViewer.css'

const RESUME_URL = '/Armaan-Amatya_Recent_Resume.pdf'
const RESUME_FILENAME = 'Armaan-Amatya_Recent_Resume.pdf'

interface ResumeViewerProps {
  isOpen: boolean
  onClose: () => void
}

function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="resume-viewer-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Resume viewer"
    >
      <div className="resume-viewer-modal">
        <div className="resume-viewer-toolbar">
          <span className="resume-viewer-title">Resume</span>
          <div className="resume-viewer-actions">
            <a
              href={RESUME_URL}
              download={RESUME_FILENAME}
              className="resume-viewer-btn resume-viewer-download"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
              </svg>
              Download
            </a>
            <button
              type="button"
              className="resume-viewer-btn resume-viewer-close"
              onClick={onClose}
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="resume-viewer-content">
          <object
            data={`${RESUME_URL}#toolbar=1&navpanes=1`}
            type="application/pdf"
            className="resume-viewer-pdf"
            title="Resume PDF"
          >
            <p className="resume-viewer-fallback">
              Your browser does not support embedded PDFs.{' '}
              <a href={RESUME_URL} download={RESUME_FILENAME} className="resume-viewer-fallback-link">
                Download the resume
              </a>
            </p>
          </object>
        </div>
      </div>
    </div>
  )
}

export default ResumeViewer
