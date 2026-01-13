import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css'; 

interface SliderImgProps{
    images: string[];
}

const SliderImg = ({ images }:SliderImgProps) => {
    if (!images || images.length === 0) return null;

    return (
        <Box sx={{ 
            width: '100%', 
            maxWidth: 600, 
            mx: 'auto',
            '& .swiper-button-next, & .swiper-button-prev': {
                color: '#BF0000',
            },
            '& .swiper-pagination-bullet-active': {
                backgroundColor: '#BF0000',
            }
        }}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={images.length > 1}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            component="img"
                            src={img}
                            alt={`Vue produit ${index + 1}`}
                            sx={{
                                width: '100%',
                                height: { xs: 300, md: 450 },
                                objectFit: 'contain',
                                bgcolor: 'white'
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default SliderImg;