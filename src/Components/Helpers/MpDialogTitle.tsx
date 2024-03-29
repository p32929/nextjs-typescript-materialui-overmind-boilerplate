import React, { MouseEventHandler } from 'react'
import { DialogTitle, Grid, IconButton, Typography } from "@material-ui/core";
import { SvgPaths } from '../../Others/SvgPaths';
import SvgIconRenderer from './SvgIconRenderer';
import { AppColors } from '../../Others/AppColors';

interface Props {
    children: React.ReactNode,
    onCrossClick?: MouseEventHandler
}

const MpDialogTitle: React.FC<Props> = (props) => {
    // Hooks

    // Funcs

    // Vars
    const dialogTitleStyle: React.CSSProperties = {
        backgroundColor: AppColors.PRIMARY_MAIN,
        color: AppColors.WHITE,
    }

    // JSX
    return (
        <DialogTitle style={dialogTitleStyle} >
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6'>{props.children}</Typography>
                <IconButton style={{ padding: 4 }} onClick={props.onCrossClick}>
                    <SvgIconRenderer path={SvgPaths.close} />
                </IconButton>
            </Grid>
        </DialogTitle>
    )

}

export default MpDialogTitle;