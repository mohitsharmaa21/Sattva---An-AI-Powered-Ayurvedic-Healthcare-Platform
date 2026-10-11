"""
Compatibility shim for Windows Defender Application Control / Smart App Control (SAC).
On Windows 11 systems with SAC enforced, unsigned native DLLs in user site-packages (such as
numpy.fft's _pocketfft_umath) are blocked at the kernel CodeIntegrity level even though they
are never used by this tabular XGBoost model pipeline.
This shim safely stubs numpy.fft if importing it raises an Application Control DLL block.
"""
import sys
import types


def apply_compat_shims() -> None:
    if "numpy.fft" not in sys.modules:
        try:
            import numpy.fft  # noqa: F401
        except Exception:
            dummy_fft = types.ModuleType("numpy.fft")
            dummy_fft.__all__ = []
            sys.modules["numpy.fft"] = dummy_fft
            try:
                import numpy as np
                np.fft = dummy_fft
            except Exception:
                pass


apply_compat_shims()
