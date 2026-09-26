import React, { useState } from 'react';

interface Model {
    id: string;
    name: string;
    description: string;
    temperature: number;
}

const Settings: React.FC = () => {
    const [models, setModels] = useState<Model[]>([
        {
            id: 'default',
            name: 'Modèle par défaut',
            description: 'Modèle standard pour les expériences',
            temperature: 0.7
        }
    ]);

    const [selectedModel, setSelectedModel] = useState<string>('default');
    const [isOpen, setIsOpen] = useState(false);

    const addModel = () => {
        const newModel: Model = {
            id: `model-${Date.now()}`,
            name: 'Nouveau modèle',
            description: 'Description du nouveau modèle',
            temperature: 0.7
        };
        setModels([...models, newModel]);
    };

    const updateModel = (id: string, updates: Partial<Model>) => {
        setModels(models.map(model =>
            model.id === id ? { ...model, ...updates } : model
        ));
    };

    const deleteModel = (id: string) => {
        if (models.length > 1) {
            setModels(models.filter(model => model.id !== id));
            if (selectedModel === id) {
                setSelectedModel(models[0].id);
            }
        }
    };

    return (
        <>
            {/* Bouton Settings en bas à gauche */}
            <button
                className="settings-toggle"
                onClick={() => setIsOpen(!isOpen)}
                title="Paramètres"
            >
                ⚙️
            </button>

            {/* Panneau Settings */}
            {isOpen && (
                <div className="settings-panel">
                    <div className="settings-header">
                        <h3>Paramètres</h3>
                        <button
                            className="close-button"
                            onClick={() => setIsOpen(false)}
                        >
                            ×
                        </button>
                    </div>

                    <div className="settings-content">
                        <div className="models-section">
                            <h4>Modèles</h4>
                            <select
                                value={selectedModel}
                                onChange={(e) => setSelectedModel(e.target.value)}
                                className="model-select"
                            >
                                {models.map(model => (
                                    <option key={model.id} value={model.id}>
                                        {model.name}
                                    </option>
                                ))}
                            </select>

                            <button
                                className="add-model-button"
                                onClick={addModel}
                            >
                                + Ajouter un modèle
                            </button>

                            <div className="models-list">
                                {models.map(model => (
                                    <div key={model.id} className="model-item">
                                        <input
                                            type="text"
                                            value={model.name}
                                            onChange={(e) => updateModel(model.id, { name: e.target.value })}
                                            className="model-name-input"
                                        />
                                        <textarea
                                            value={model.description}
                                            onChange={(e) => updateModel(model.id, { description: e.target.value })}
                                            className="model-description-input"
                                            rows={2}
                                        />
                                        <div className="temperature-control">
                                            <label>Température: {model.temperature}</label>
                                            <input
                                                type="range"
                                                min="0"
                                                max="2"
                                                step="0.1"
                                                value={model.temperature}
                                                onChange={(e) => updateModel(model.id, { temperature: parseFloat(e.target.value) })}
                                                className="temperature-slider"
                                            />
                                        </div>
                                        {models.length > 1 && (
                                            <button
                                                className="delete-model-button"
                                                onClick={() => deleteModel(model.id)}
                                            >
                                                Supprimer
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Settings;