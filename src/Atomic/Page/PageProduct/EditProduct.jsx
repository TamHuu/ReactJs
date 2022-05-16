import React, { useState } from "react";
import PropTypes from "prop-types";
// import ComboBox from "./ComboBox";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { Avatar, TextField } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <TextField id="TenSp" label="Tên Sản Phẩm" />
      <TextField id="Images" label="Hình ảnh" variant="filled" />
      <TextField id="Desc" label="Miêu tả" variant="outlined" />
      <TextField id="money" label="Thành tiền" variant="outlined" />
      <TextField id="status" label="Tình trạng" variant="outlined" />
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function FormEditProduct(props) {
  const [name, setName] = useState(props.row.name || "");
  const [image, setImage] = useState(props.row.image || "");
  const [desc, setDesc] = useState(props.row.desc || "");
  const [money, setMoney] = useState(props.row.money || "");
  const [status, setStatus] = useState(props.row.status || "");

  const handleClose = () => {
    props.setShowDialog(false);
  };

  const handleExit = () => {
    props.setShowDialog(false);
    props.setEditDialog(true);
  };

  const handleSave = () => {
    props.updateData({
      nodot: props.row.nodot,
      id: props.row.id,
      name: name,
      image,
      desc,
      money,
      status,
    });
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={true}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Sản phẩm
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          {props.row.image !== undefined && (
            <Avatar
              alt="Cindy Baker"
              variant="square"
              src={props.row.image}
              style={{
                width: "250px",
                height: "250px",
                marginBottom: "16px",
                marginLeft: "131px",
              }}
            />
          )}
          <TextField
            id="TenSp"
            style={{ marginBottom: "16px" }}
            label="Tên Sản Phẩm"
            variant="outlined"
            fullWidth={true}
            value={name}
            InputProps={{
              readOnly: props.editDialog,
            }}
            onChange={(e) => setName(e.target.value)}
          />
          {!props.editDialog && (
            <TextField
              id="image"
              style={{ marginBottom: "16px" }}
              label="Url Image"
              variant="outlined"
              fullWidth={true}
              value={image}
              InputProps={{
                readOnly: props.editDialog,
              }}
              onChange={(e) => setImage(e.target.value)}
            />
          )}
          <TextField
            id="desc"
            style={{ marginBottom: "16px" }}
            label="Miêu tả"
            variant="outlined"
            fullWidth={true}
            rows={4}
            multiline
            value={desc}
            InputProps={{
              readOnly: props.editDialog,
            }}
            onChange={(e) => setDesc(e.target.value)}
          />
          <TextField
            id="money"
            style={{ marginBottom: "16px" }}
            label="Thành tiền"
            variant="outlined"
            fullWidth={true}
            rows={4}
            value={money}
            InputProps={{
              readOnly: props.editDialog,
            }}
            onChange={(e) => setMoney(e.target.value)}
          />
          <TextField
            id="status"
            style={{ marginBottom: "16px" }}
            label="Tình trạng"
            variant="outlined"
            fullWidth={true}
            rows={4}
            value={status}
            InputProps={{
              readOnly: props.editDialog,
            }}
            onChange={(e) => setStatus(e.target.value)}
          />
        </Typography>
      </DialogContent>
      <DialogActions>
        {!props.editDialog && (
          <Button
            autoFocus
            color="green"
            onClick={handleSave}
            variant="contained"
          >
            Lưu
          </Button>
        )}
        <Button
          autoFocus
          color="secondary"
          onClick={handleExit}
          variant="contained"
        >
          Thoát
        </Button>
      </DialogActions>
    </Dialog>
  );
}