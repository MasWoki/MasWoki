const express = require('express');
const Mahasiswa = require('../models/Mahasiswa');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.find();
        res.json(mahasiswa);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', (req, res) => {
    try{
        console.log(req,body);
        
        const mahasiswa = new Mahasiswa({
            prodi: req.body.prodi,
            nama: req.body.nama,
            npm: req.body.npm,
        });

        const addMahasiswa = await mahasiswa.save();

        res.json({
            message: 'berhasil tambah data!',
            data: addMahasiswa
        })
    }   
    catch (error) {
         res.status(500).json({ message: error.message });
        }
    
})

module.exports = router;