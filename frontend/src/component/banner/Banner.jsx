/* Carousel container */
.carousel-container {
    margin-top: 20px;
    border-radius: 20px;
    overflow: hidden;
}

/* Slide container */
.banner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 280px;
    background: linear-gradient(135deg, #7C3AED, #5B21B6);
    position: relative;
}

/* Glass card */
.banner-first {
    display: flex;
    align-items: center;
    gap: 25px;
    padding: 20px 30px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(18px);
    box-shadow: 0 10px 40px rgba(0,0,0,0.25);
    transition: all 0.4s ease;
}

.banner-first:hover {
    transform: scale(1.03);
}

/* Image wrapper */
.banner-image-container {
    position: relative;
}

/* Profile image */
.banner-image {
    height: 95px;
    width: 95px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid white;
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

/* Text area */
.banner-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* Name */
.banner-name {
    font-size: 22px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 6px;
}

/* Subtitle */
.banner-sell {
    font-size: 15px;
    color: #e0e7ff;
}

.banner-sell span {
    font-weight: 700;
    color: #ffffff;
}

/* Carousel arrows */
.carousel .control-arrow {
    opacity: 0;
    transition: 0.3s;
}

.carousel:hover .control-arrow {
    opacity: 1;
}

/* Dots */
.carousel .control-dots .dot {
    background: #c4b5fd;
    box-shadow: none;
}

.carousel .control-dots .dot.selected {
    background: #ffffff;
}

/* Loader alignment fix */
.spinner-border,
.spinner-grow {
    display: block;
    margin: 60px auto;
}

/* MOBILE */
@media (max-width: 600px) {

.banner-container {
    height: 220px;
}

.banner-first {
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    text-align: center;
}

.banner-image {
    height: 70px;
    width: 70px;
}

.banner-name {
    font-size: 18px;
}

.banner-sell {
    font-size: 13px;
}
}