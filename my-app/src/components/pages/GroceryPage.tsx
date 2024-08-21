import {useEffect, useState} from "react";
import {GroceryProps} from "../GroceryProps.tsx";
import GroceryService from "../../Service/GroceryDataService.ts";
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

function GroceryPage() {

    const [grocercies, setGroceries] = useState<GroceryProps[]>([]);

    useEffect(() => {
        GroceryService()
            .getGroceryData()
            .then((response) => {
                setGroceries(response);
                console.log(response);
            })
    }, []);

    return (
        <>
            <h2>Homepage</h2>


            <Grid container spacing={2}>
                {grocercies.map((grocery: GroceryProps) => (
                    <Grid item xs={12} sm={6} md={4} key={grocery.groceryId}>
                        <Card sx={{maxWidth: 345}}>
                            <CardMedia
                                sx={{height: 140}}
                                image={grocery.url}
                                title={grocery.name || "Unnamed grocery"}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {grocery.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {grocery.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default GroceryPage;
