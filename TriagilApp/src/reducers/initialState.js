const initialState = {
    user: {
        provider: false,
        patient: {
            id: 0,
            cpf: '',
            name: '',
            email: '',
            password: '',
        },
        nurse: {
            id: 0,
            cre: '',
            name: '',
            email: '',
            password: '',
        },
    },
    triageRecord: {
        id_patient: 0,
        id_nurse: 0,
        id_patient_record: 0,
        main_complain: "",
        nurse_notes: "",
        drugs: "",
        discriminators: "" ,
        has_alergies: false,
        alergies: "",
        pain_rule: 0,
        covid19: 0,
        fc: 10.00,
        fr: 17.00,
        pas: 115.00,
        pad: 78.00,
        spo2: 98.00,
        weight: 17.00,
        headache: true,
        estadomental_alterado: true,
        estado_mental_alterado_notes:"",
        sinais_de_choque_headache: false ,
        sinaisdechoquenotes_headache: "",
        convulsion_headache: false,
        sinais_neurologicos_focais_headache: false ,
        sinais_neurologicos_focais_notes_headache:"",
        aumento_subitodador: false ,
        aumento_subito_da_dornotes: "" ,
        perda_aguda_completa_visao: false,
        menigismo_headache: false,
        menigismo_notes_headache: "",
        pain_headache: 0,
        temperature_headache: 0.0,
        inconsciencia_headache: false,
        inconsciencia_notes_headache: "",
        diminuicao_visao: false,
        nausea_e_vomito:false,
        sore_throat: false,
        comprometimento_vias_aereas_soathroat: false ,
        comprometimento_vias_aereas_notes_soathroat:"" ,
        pain_soathroat: 0 ,
        estridor_laringeo: false,
        estridor_laringeo_notes: "",
        viagem_recente:false ,
        temperatura_soathroat:0.0,
        dificuldade_deglutir: false,
        ardencia_garganta: false,
        convulsion: false,
        convulsao_ativa: false,
        comprometimento_vias_aereas_convulsion: false,
        comprometimento_vias_aereas_notes_convulsion:"",
        alteracoes_glicemicas_convulsion:false,
        alteracoes_glicemicas_number_convulsion:0,
        respiracao_inadequada: false,
        respiracao_inadequada_notes:"" ,
        sinais_neurologicos_focais_convulsion:false ,
        sinais_neurologicos_focais_notes_convulsion:"",
        crise_convulsiva_reentrante: false,
        menigismo_convulsion:false,
        menigismo_notes_convulsion:"",
        overdose_envenenamento: false,
        overdose_envenenamento_notes: "" ,
        trauma_craniano_recente_convulsion:false ,
        trauma_craniano_recente_notes_convulsion:"",
        pos_comicial_convulsion: false,
        pos_comicial_notes_convulsion:"" ,
        epilepsia_tratada: false,
        epilepsia_tratada_notes: "",
        crise_convulsiva_recente_convulsion: false,
        crise_convulsiva_recente_notes_convulsion: "",
        fainting: false,
        alteracao_consciencia_fainting:0 ,
        comprometimento_vias_aereas_fainting:false ,
        comprometimento_vias_areas_notes_fainting:"" ,
        alteracoes_glicemicas_fainting: false,
        alteracoes_glicemicas_number_fainting: 0 ,
        rigidez: false,
        rigidez_notes:"" ,
        sinais_de_choque_fainting: false,
        sinais_de_choque_notes_fainting: "",
        pulso_anormal: false,
        dor_toracica: false,
        dor_toracica_notes: "",
        disturbio_subito_equilibrio: false,
        disturbio_subito_equilibrio_notes: "",
        pain_fainting: 0,
        pos_comicial_fanting: false,
        pos_comicial_notes_faiting: "",
        dispneia_aguda:false,
        temperature: 0,
        relato_alergia: false,
        relato_alergia_notes: "",
        cefaleia: 0,
        deficit_neurologico: false,
        trauma_craniano_recente_fainting: false,
        trauma_craniano_recente_notes_fainting: " ",
        inconsciencia_fainting: false,
        primeira_convulsao: false,
        crise_convulsiva_recente_fainting: false,
        crise_convulsiva_recente_notes_fainting: "",
        parestesia: false,
        parestesia_notes: "",
        diarrhea: false,
        vomito_com_sangue: false,
        vomito_com_sangue_notes: "",
        dor_abdominal: false,
        alteracao_consciencia_diarrhea: 0,
        perfusao_periferica: 0,
        temperatura_diarrhhea: 0,
        fezes_enegrecidas: false,
        fezes_enegrecidas_notes: "",
        pain_diarrhea: 0,
        desidratacao: false,
        desidratacao_notes: "",
        vomitos_esparsos: false,
        evento_recente: false
    }

        
};
  
export default initialState;
  