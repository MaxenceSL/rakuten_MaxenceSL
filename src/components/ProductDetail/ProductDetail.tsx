import {
    Box,
    Typography,
    Button,
    Rating,
    Breadcrumbs,
    Link,
    Stack,
    Chip,
    Divider
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductDetail() {
    
    return (
        <Box sx={{ p: 3, maxWidth: 800, margin: '0 auto' }}>

            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                <Link underline="hover" color="#999999" sx={{ fontSize: '0.625rem' }} href="/">...</Link>
                <Link underline="hover" color="#999999" sx={{ fontSize: '0.625rem' }} href="/">Téléphone Google</Link>
                <Typography color="#999999" sx={{ fontSize: '0.625rem' }}>Google Pixel 9 Pro</Typography>
            </Breadcrumbs>

            <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
                <Box
                    component="img"
                    sx={{ width: { xs: '100%', md: 300 }, borderRadius: 2 }}
                    src="pixel9.webp"
                    alt="Samsung Galaxy Watch"
                />

                <Box>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Samsung Galaxy Watch Ultra (2025) <Typography component="span" variant="h4" color="primary">Samsung</Typography>
                    </Typography>

                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                        <Rating value={4.5} precision={0.5} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary">(12 avis)</Typography>
                    </Stack>

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ mb: 3 }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography variant="body1" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
                                609,99 €
                            </Typography>
                            <Chip label="SOLDES -6%" color="error" size="small" />
                        </Stack>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'left', color: 'error.main' }}>
                            569,99 €
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
                <Typography variant="h6" gutterBottom>Description du produit</Typography>
                <Typography variant="body1" color="text.secondary">
                    Ceci est une description détaillée du produit.
                </Typography>
            </Box>

            <Box sx={{ mt: 5, textAlign: "left" }}>
                <Typography variant="h6" gutterBottom>Avis sur Google Pixel 9 Pro Vert Sauge 256Go</Typography>
                <Box sx={{ py: 2, borderBottom: '1px solid #323232' }}>
                    <Typography variant="h6">
                        <Rating value={5} precision={0.5} readOnly size="small" />
                        Parfait
                    </Typography>
                    <Typography variant="body1">
                        par Antoine (Voir ses avis) le 17/01/2025
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Très bon produit qui réponds à toutes mes attentes.
                    </Typography>
                </Box>
                <Box sx={{ py: 2, borderBottom: '1px solid #323232' }}>
                    <Typography variant="h6">
                        <Rating value={4.5} precision={0.5} readOnly size="small" sx={{ color: '#ffc107' }} />
                        GOOGLE PIXEL 9 PRO
                    </Typography>
                    <Typography variant="body1">
                        par MadameCormierMarthe (Voir ses avis) le 24/12/2024
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Très beau produit (en même temps cela va avec le prix).
                        Les performances du produits sont à la hauteur de ce qui à été annoncé.
                        La couleur vert sauge laisse à désirer ... Gris aurait été plus juste !
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default ProductDetail;