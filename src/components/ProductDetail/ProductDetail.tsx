import {
    Box,
    Typography,
    Button,
    Rating,
    Breadcrumbs,
    Link,
    Stack,
    Chip,
    Divider,
    CircularProgress
} from '@mui/material';
import parse from 'html-react-parser';
import CancelIcon from '@mui/icons-material/Cancel';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import type { IProducts } from '../../@types/products';
import SliderImg from '../SliderImg/SliderImg';

function ProductDetail() {
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [oneProduct, setOneProduct] = useState<IProducts | null>(null);

    // console.log('affichage dataProduit'+oneProduct?.data.headline);

    const getOneProduct = async () => {
        setErrorMessage('');
        try {
            const response = await axios.get(`https://api-rakuten-vis.koyeb.app/product/13060247469`);
            setOneProduct(response.data);
            // console.log(response.data);

        } catch (e) {
            setErrorMessage('Erreur de fetch du produit. Merci de réessayer plus tard');
            console.error(e);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getOneProduct();
    }, []);


    //gestion d'erreur
    if (errorMessage) {
        return (
            <Box
                sx={{
                    backgroundColor: '#f38d8d',
                    p: 3,
                    borderRadius: '0.5rem',
                    margin: '2rem auto',
                }}
            >
                {/* L'icône demandée */}
                <CancelIcon sx={{ fontSize: 50, color: '#BF0000' }} />

                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#BF0000', }}>
                    Erreur de récupération
                </Typography>

                <Typography variant="body1" sx={{ color: 'white', }}>
                    {errorMessage}
                </Typography>
            </Box>
        );
    }

    //gestion page chargement
    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                <CircularProgress color="error" size={60} />
                <Typography>Chargementn en cours ...</Typography>
            </Box>
        );
    }

    //affichage page produit
    if (!oneProduct) return null;

    const product = oneProduct.data;

    const breadcrumbs = product.breadcrumbs;
    const title = product.headline;
    const brand = product.contributor.caption;
    const mainImage = product.imagesUrls[0];
    const allImages = product.imagesUrls;
    const price = product.summaryNewBestPrice;
    const ratingScore = product.globalRating.score;
    const totalReviews = product.globalRating.nbReviews;

    const featuresHtml = parse(product.description);
    const editoHtml = parse(product.edito);
    const technicalSpecs = product.specifications.sections.entry;

    const userReviews = product.reviews;

    //discount en dur pour faire les tests
    const discount = 0;


    console.log('la note totale' + price);


    return (
        <Box sx={{ p: 3, maxWidth: 800, margin: '0 auto' }}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1;

                    return isLast ? (
                        <Typography key={index} color="#Bf0000" sx={{ fontSize: '0.625rem' }}>
                            {item.label}
                        </Typography>
                    ) : (
                        <Link key={index} href={item.url} underline="hover" color="inherit" sx={{ fontSize: '0.625rem' }}>
                            {item.label}
                        </Link>
                    );
                })}
            </Breadcrumbs>

            <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
                <SliderImg images={allImages} />

                <Box>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {title} <Typography component="span" variant="h4" color="primary">{brand}</Typography>
                    </Typography>

                    {totalReviews > 0 ? (
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                            <Rating value={ratingScore} precision={0.5} readOnly size="small" />
                            <Typography variant="body2" color="text.secondary">
                                ({totalReviews} avis)
                            </Typography>
                        </Stack>
                    ) :
                        <Typography color="text.secondary" sx={{ fontSize: '0.825rem', textAlign: "left" }}>Aucun commentaire(s)</Typography>
                    }

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ mb: 3 }}>
                        {discount > 0 ? (
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Typography variant="body1" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
                                    609,99 €
                                </Typography>
                                <Chip label="SOLDES -6%" color="error" size="small" />
                            </Stack>
                        ) : null}
                        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'left', color: 'error.main' }}>
                            {price} €
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<ShoppingCartIcon />}
                        fullWidth
                        sx={{ py: 1.5, bgcolor: '#BF0000' }}
                    >
                        Ajouter au panier
                    </Button>
                </Box>
            </Box>

            <Box sx={{ mt: 4, textAlign: "left" }}>
                <Typography variant="h6" gutterBottom>Caractéristiques</Typography>
                <Typography component="div" variant="body1" color="text.secondary">
                    {featuresHtml}
                </Typography>
            </Box>
            <Box sx={{ mt: 4, textAlign: "left" }}>
                <Typography variant="h6" gutterBottom>Description du produit</Typography>
                <Typography component="div" variant="body1" color="text.secondary">
                    {editoHtml}
                </Typography>
                <Typography component="div" variant="body1" color="text.secondary" sx={{ mt: 4 }}>
                    {technicalSpecs.map((section, sectionIdx) => (
                        <Box key={sectionIdx} sx={{ mb: 3 }}>
                            <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 'bold', color: 'text.primary', borderBottom: '1px solid #ddd', mb: 1, pb: 0.5 }}
                            >
                                {section.title}
                            </Typography>

                            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                                {section.content.map((item, itemIdx) => (
                                    <Box
                                        component="li"
                                        key={itemIdx}
                                        sx={{ display: 'flex', py: 0.5, fontSize: '0.9rem' }}
                                    >
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ fontWeight: 'bold', minWidth: '180px', color: 'text.primary' }}
                                        >
                                            {item.header} :
                                        </Typography>

                                        <Typography
                                            component="span"
                                            variant="body2"
                                        >
                                            {item.body}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Typography>
            </Box>

            <Box sx={{ mt: 5, textAlign: "left" }}>
                <Typography variant="h4" gutterBottom>Avis sur {title.split(' ').slice(0, 10).join(' ')}
                    {title.split(' ').length > 10 ? '...' : ''}</Typography>
                <Box sx={{ py: 2 }}>
                    {userReviews.map((item, index) => (
                        <Box key={index} sx={{ py: 2, borderBottom: '1px solid #323232' }}>
                            <Typography variant="h6">
                                <Rating value={5} precision={0.5} readOnly size="small" />
                                {item.title}
                            </Typography>
                            <Typography variant="body1">
                                par {item.author.firstName} (Voir ses avis) le {new Date(item.date).toLocaleDateString('fr-FR')}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {item.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default ProductDetail;