import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => ({
    ambasyName:{
        fontSize: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold
    },
    cImg: {
        display: 'inline-block',
        height: theme.spacing(8),
        width: theme.spacing(8),
        borderRadius: '50%',
        boxShadow: theme.shadows[10],
        margin: theme.spacing(2,0)
    },
    detailCard: {
        padding:theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}));