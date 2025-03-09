// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      if (navLinks.style.display === "flex") {
        navLinks.style.display = "none"
      } else {
        navLinks.style.display = "flex"
        navLinks.style.flexDirection = "column"
        navLinks.style.position = "absolute"
        navLinks.style.top = "100%"
        navLinks.style.left = "0"
        navLinks.style.width = "100%"
        navLinks.style.padding = "20px"
        navLinks.style.backgroundColor = "white"
        navLinks.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)"
      }
    })
  }

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.padding = "10px 0"
      navbar.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)"
    } else {
      navbar.style.padding = "15px 0"
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    }
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        })

        // Close mobile menu if open
        if (window.innerWidth < 768 && navLinks.style.display === "flex") {
          navLinks.style.display = "none"
        }
      }
    })
  })

  // Function to copy code blocks
  window.copyCode = (button) => {
    const codeBlock = button.parentElement
    const code = codeBlock.querySelector("code").innerText

    navigator.clipboard
      .writeText(code)
      .then(() => {
        // Change button icon temporarily to show success
        const originalIcon = button.innerHTML
        button.innerHTML = '<i class="fas fa-check"></i>'

        setTimeout(() => {
          button.innerHTML = originalIcon
        }, 2000)
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err)
      })
  }

  // Download button click event
  const downloadBtn = document.getElementById("downloadBtn")

  if (downloadBtn) {
    downloadBtn.addEventListener("click", (e) => {
      e.preventDefault()

      // Create a mock download alert
      alert("Download started! Thank you for downloading Telegram Restricted Content Downloader.")

      // In a real scenario, you would redirect to the actual download file
      // window.location.href = 'path/to/your/download/file.zip';
    })
  }

  // Animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".feature-card, .step, .usage-step, .requirements-card, .download-card")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = element.classList.contains("feature-card") ? "translateY(0)" : "translate(0, 0)"
      }
    })
  }

  // Initialize elements with opacity 0
  const elementsToAnimate = document.querySelectorAll(
    ".feature-card, .step, .usage-step, .requirements-card, .download-card",
  )

  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = element.classList.contains("feature-card") ? "translateY(20px)" : "translate(10px, 10px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })

  // Add scroll event listener
  window.addEventListener("scroll", animateOnScroll)

  // Trigger scroll event to check initial visible elements
  window.dispatchEvent(new Event("scroll"))
})

